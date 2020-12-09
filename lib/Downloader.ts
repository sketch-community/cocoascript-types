import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as mkdirp from 'mkdirp';
import PromisePool from '@supercharge/promise-pool';
import axios, { AxiosInstance } from 'axios';

const MAX_CONCURRENCY = os.cpus().length;
const INCLUDE_DOCS = [
  'documentation/uikit',
  'documentation/appkit',
  'documentation/mapkit',
  'documentation/quartz',
  'documentation/corenfc',
  'documentation/sirikit',
  'documentation/coredata',
  'documentation/cloudkit',
  'documentation/app_clips',
  'documentation/coreimage',
  'documentation/objectivec',
  'documentation/foundation',
  'documentation/iobluetooth',
  'documentation/corelocation',
  'documentation/coregraphics',
  'documentation/corespotlight',
  'documentation/corefoundation',
  'documentation/exceptionhandling',
  'documentation/securityinterface',
  'documentation/notificationcenter',
  'documentation/uniformtypeidentifiers',
];

export class Downloader {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://developer.apple.com/tutorials/data',
    });
  }

  start(url: string) {
    return this.download([url]);
  }

  async download(urls: string[], result = new Set()) {
    const { results } = await PromisePool.withConcurrency(MAX_CONCURRENCY)
      .for(urls)
      .process(async url => {
        if (result.has(url)) {
          return {};
        } else {
          try {
            const { status, data } = await this.client.get(url + '.json?language=objc');
            if (status === 200) {
              console.log(status, url);
              const file = url.replace(/\//, '') + '.json';
              mkdirp.sync(path.dirname(file));
              fs.writeFileSync(file, JSON.stringify(data, null, 2));
              result.add(url);
              return data;
            } else {
              console.log(status, url);
              return {};
            }
          } catch (e) {
            console.log(e.response.status, url);
            return {};
          }
        }
      });
    const found = results.reduce((acc, data) => {
      if (data.references) {
        Object.values(data.references).forEach((ref: any) => {
          if (ref.url && INCLUDE_DOCS.some(doc => ref.url.includes(doc)) && !result.has(ref.url)) {
            acc.push(ref.url);
          }
        });
      }
      return acc;
    }, []);
    if (found.length > 0) {
      await this.download(found, result);
    }
  }
}
