import { NAMESPACE } from './constant';
import { shim } from './shim';

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export function normalizeType(type: string, withNamespace = false) {
  if (shim[type]) {
    return shim[type];
  }
  if (withNamespace) {
    return `${NAMESPACE}.${type}`;
  }
  return type;
}

export function getTokens(doc: any) {
  return doc.primaryContentSections?.[0]?.declarations?.[0]?.tokens || [];
}
