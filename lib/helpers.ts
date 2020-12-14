import { NAMESPACE } from './constant';
import { shim } from './shim';
import { extend } from './extend';

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export function normalizeType(
  type: string,
  options: {
    extend?: boolean;
    withNamespace?: boolean;
  } = {
    extend: true,
    withNamespace: false,
  }
) {
  let finalType = type;
  if (options.extend && extend[finalType]) {
    return extend[finalType];
  }
  if (shim[finalType]) {
    return shim[finalType];
  }
  if (options.withNamespace) {
    return `${NAMESPACE}.${finalType}`;
  }
  return finalType;
}

export function getTokens(doc: any) {
  return doc.primaryContentSections?.[0]?.declarations?.[0]?.tokens || [];
}
