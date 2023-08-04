import UAParser, { IResult } from 'ua-parser-js';

import { isNotEmpty } from '@/utils/helper';

const parser = new UAParser();

/**
 * User Agent 유틸
 * https://faisalman.github.io/ua-parser-js/
 * @returns {object}
 */
export const parseUA = (): IResult => {
  const result = {
    browser: parser.getBrowser(),
    cpu: parser.getCPU(),
    device: parser.getDevice(),
    engine: parser.getEngine(),
    os: parser.getOS(),
    ua: parser.getUA(),
  };
  return result;
};

export const setUA = (userAgent: string) => {
  parser.setUA(userAgent);
};

export const checkMobile = () => {
  const {
    device: { type },
  } = parseUA();

  return isNotEmpty(type);
};

export const checkOS = (platform: string) => {
  const {
    os: { name },
  } = parseUA();
  const os = name ? name.toLowerCase() : '';

  return os === platform.toLowerCase();
};

export const checkBrowser = (browser: string) => {
  const {
    browser: { name },
  } = parseUA();

  return name?.toLowerCase() === browser.toLowerCase();
};
