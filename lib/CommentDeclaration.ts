import { APPLE_IDENTIFIER_PREFIX, TS_FILE_IDENTIFIER_PREFIX } from './constant';

export const replaceIdToUrl = (id: string) => {
  return id.replaceAll(APPLE_IDENTIFIER_PREFIX, TS_FILE_IDENTIFIER_PREFIX);
};

export const getDocumentComment = (id: string) => `// ${replaceIdToUrl(id)}`;
