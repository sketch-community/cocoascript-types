#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const os = require('os');
const axios = require('axios');
const PromisePool = require('@supercharge/promise-pool');

const client = axios.create({
  baseURL: 'https://developer.apple.com/tutorials/data',
});

const MAX_CONCURRENCY = os.cpus().length;
const INCLUDE_DOCS = ['/appkit', '/objectivec', '/foundation']

async function fetchUrls(urls, result = new Set()) {
  const { results, errors } = await PromisePool.withConcurrency(MAX_CONCURRENCY)
    .for(urls)
    .process(async url => {
      if (result.has(url)) {
        return {};
      } else {
        try {
          const { status, data } = await client.get(url + '.json?language=objc');
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
      Object.values(data.references).forEach(ref => {
        if (ref.url && INCLUDE_DOCS.some(doc => ref.url.includes(doc)) && !result.has(ref.url)) {
          acc.push(ref.url);
        }
      });
    }
    return acc;
  }, []);
  if (found.length > 0) {
    await fetchUrls(found, result);
  }
}

async function main() {
  await fetchUrls(['/documentation/appkit']);
}

main();
