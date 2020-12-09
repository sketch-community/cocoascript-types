import { shim } from './shim';

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export function normalizeType(type: string) {
  if (shim[type]) {
    return shim[type];
  }
  return ['cocoascript', type].join('.');
}
