/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * package.json 파일의 버전 정보 불러오기
 * @return {string}
 */
export const getPackageVersion = (): string => {
  return process.env.NEXT_PUBLIC_PROJECT_VERSION || '';
};

/**
 * value 문자열의 공백 완전 제거
 * @param {string} val - 공백을 제거할 문자열
 * @return {string}
 */
export const trim = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/(^\s*)|(\s*$)/g, '');
};

/**
 * value 문자열을 JSON.parse 처리
 * 만약 유효한 데이터가 아니면 빈 Object를 반환
 * @param {unknown} val - 확인할 값
 * @return {object}
 */
export const parseJson = (str: unknown): object => {
  if (typeof str !== 'string') {
    return {};
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

/**
 * 특정 문자열에서 확장자 반환
 * 만약 유효한 데이터가 아니면 빈 문자열을 반환
 * @param {string} val - 확인할 값
 * @return {string}
 */
export const getFileExtension = (str: string, dot = false): string => {
  if (typeof str !== 'string') {
    return '';
  }

  const result = str.match(/(?:\.([^.]+))?$/);
  if (result && result?.length > 0) {
    return dot ? result[0] : result[1];
  } else {
    return '';
  }
};

/**
 * value가 객체인지 확인하여 true/false 반환
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */
export const isObject = <T = Record<string, unknown> | object>(val: T): val is { [K in keyof T]: T[K] } => {
  return val !== null && typeof val === 'object' && val.constructor === Object;
};

/**
 * value가 함수인지 확인하여 true/false 반환
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */

export const isFunction = (val: unknown): val is (...args: any[]) => any => {
  if (isEmpty(val)) {
    return false;
  }
  return typeof val === 'function';
};

/**
 * value가 순수 객체인지 확인하여 true/false 반환
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */
export const isPlainObject = <T = Record<string, unknown> | object>(val: T): val is { [K in keyof T]: T[K] } => {
  if (isEmpty(val)) {
    return false;
  }
  return isObject(val) && hasOwnProperty(val?.constructor.prototype, 'isPrototypeOf');
};

/**
 * value가 숫자인지 확인하여 true/false 반환
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */
export const isNumeric = (val: unknown): val is number => {
  val = String(val).replace(/^\s+|\s+$/g, '');
  if (typeof val === 'string' && /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g.test(val)) {
    val = val.replace(/,/g, '');
    return !isNaN(Number(val));
  } else {
    return false;
  }
};

/**
 * value가 비어있지 않은 문자열인지 확인하여 true/false 반환
 * @param {string} str - 확인할 문자열
 * @return {boolean}
 */
export const isNotEmptyString = (str: unknown): str is string => {
  if (!str || typeof str !== 'string') {
    return false;
  }
  return str.trim().length > 0;
};

/**
 * value가 비어있는지 확인하여 true/false 반환
 * isNotEmptyString은 문자열에 대해서만 검증, isEmpty는 문자열, 객체, 배열 등 검증
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */
export const isEmpty = (val: unknown): val is never => {
  if (val === null || val === undefined || typeof val === 'undefined') {
    return true;
  }
  if (Array.isArray(val)) {
    return val.length === 0;
  } else if (typeof val === 'object') {
    return isObject(val) && Object.keys(val).length === 0;
  } else if (typeof val === 'string') {
    return !isNotEmptyString(val);
  } else if (!val) {
    return true;
  }
  return false;
};

/**
 * value가 비어있지 않은지 확인하여 true/false 반환
 * @param {unknown} val - 확인할 값
 * @return {boolean}
 */
export const isNotEmpty = <T>(val: T): val is NonNullable<T> => {
  return !isEmpty(val);
};

/**
 * value에 공백이 있는지 확인하여 true/false 반환
 * @param {string} val - 확인할 문자열
 * @return {boolean}
 */
export const hasAnySpaces = (val: string): val is string => {
  if (typeof val !== 'string') {
    return false;
  }
  if (isEmpty(val) || /^\S+$/g.test(val)) {
    return false;
  } else {
    return true;
  }
};

/**
 * 객체가 속성을 갖고 있는지 확인하여 true/false 반환
 * @param {object} val - 확인할 객체
 * @param {string} key - 포함하고 있는지 확인할 속성
 * @return {boolean}
 */
export const hasOwnProperty = (val: Record<string, unknown>, key: string): val is Record<string, unknown> => {
  if (!isObject(val)) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(val, key);
};

/**
 * 전달한 값을 깊은 복사(모든 반응성과 참조를 제거)하여 반환
 * @param {unknown} val - 복사할 값
 * @return {typeof val}
 */
export const cloneDeep = <T>(val: T): T => {
  if (
    val === null ||
    val === undefined ||
    typeof val === 'undefined' ||
    typeof val === 'boolean' ||
    typeof val === 'string' ||
    typeof val === 'number'
  ) {
    return val;
  }

  let result;

  if (Array.isArray(val)) {
    result = val.map((valObj) => cloneDeep(valObj));
  } else if (isObject(val)) {
    const result: Record<string, unknown> = {};

    Object.entries(val).forEach(([key, value]) => {
      result[key] = cloneDeep(value);
    });

    return result as T;
  } else {
    result = isEmpty(val) ? '' : val;
  }

  return result as T;
};

/**
 * 두 값이 동일한지 확인
 * @param {unknown} a - 비교할 값
 * @param {unknown} b - 비교할 값
 * @param {object} options - isEqul 옵션 설정
 * @param {array} options.excludes - 객체 비교 시, 비교에서 제외할 속성 배열
 * @return {boolean}
 */
export const isEqual = (a: unknown, b: unknown, { excludes = [] }: { excludes?: string[] } = {}): boolean => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object' && isObject(a) && isObject(b)) {
    let keysOfA = Object.keys(a);
    let keysOfB = Object.keys(b);

    if (excludes.length) {
      keysOfA = keysOfA.filter((key) => !excludes.includes(key));
      keysOfB = keysOfB.filter((key) => !excludes.includes(key));
    }

    return (
      keysOfA.length === keysOfB.length && keysOfA.every((key) => isEqual({ ...a }[key], { ...b }[key], { excludes }))
    );
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((val, index) => isEqual(val, b[index], { excludes }));
  } else {
    return a === b;
  }
};

/**
 * object 안에 value가 비어있는지 확인하여 비어있다면 해당 key 값 자동 제거
 * @param {object} obj - 확인할 값
 * @param {object} options - deleteObjectKey 옵션 설정
 * @param {array} options.includes - 무조건 삭제할 속성 key 배열
 * @param {array} options.excludes - value가 비어있더라도 삭제하지 않고 남겨둘 속성 key 배열
 * @param {boolean} options.removeEmptyKeys - 비어있는 속성을 삭제할지 여부
 * @return {object} obj
 */
export const deleteObjectKey = <T>(
  obj: T,
  {
    includes = [],
    excludes = [],
    removeEmptyKeys = true,
  }: { includes?: string[]; excludes?: string[]; removeEmptyKeys?: boolean } = {},
): T => {
  for (const propName in obj) {
    if (!excludes.includes(propName)) {
      if (includes.includes(propName) || (removeEmptyKeys && !isNotEmpty(obj[propName]))) {
        delete obj[propName];
      }
    }
  }
  return obj;
};

/**
 * 현재 element의 scroll 위치 반환
 * @param {HTMLElement | Element} element - element의 id 또는 class명
 * @param {HTMLElement | Element} element - 현재 element의 스크롤바가 있는 부모 element, 없으면 window로 설정
 * @return {number} element의 현재 scrollY 값
 */
export const getElementOffsetTop = (element: HTMLElement | Element, scrollTarget?: HTMLElement | Element) => {
  const elementOffsetTop = element ? element.getBoundingClientRect().top : 0;
  const targetScrollTop = scrollTarget ? scrollTarget.scrollTop : window.pageYOffset || window.scrollY || 0;

  return element ? Math.ceil(elementOffsetTop + targetScrollTop) : 0;
};

/**
 * 현재 element의 scroll 위치 반환
 * @param {HTMLElement | Element} element - element의 id 또는 class명
 * @param {HTMLElement | Element} element - 현재 element의 스크롤바가 있는 부모 element, 없으면 window로 설정
 * @return {number} element의 현재 scrollY 값
 */
export const getElementOffsetLeft = (element: HTMLElement | Element, scrollTarget?: HTMLElement | Element) => {
  const elementOffsetLeft = element ? element.getBoundingClientRect().left : 0;
  const targetScrollLeft = scrollTarget ? scrollTarget.scrollLeft : window.scrollX || 0;

  return element ? Math.ceil(elementOffsetLeft + targetScrollLeft) : 0;
};

/**
 * 숫자 3자리 마다 쉼표 찍어서 반환 (소수점은 쉼표 제외)
 * @param {string} val - 쉼표를 찍을 문자열
 * @return {string}
 */
export const commaString = (val: string | number) => {
  if (!isNotEmpty(val)) {
    return '';
  }

  const valToString = val.toString();
  const regexCommaString = /\B(?=(\d{3})+(?!\d))/g;
  if (!valToString.includes('.')) {
    return valToString.replace(regexCommaString, ',');
  }

  const splitVal = valToString.split('.');
  splitVal[0] = splitVal[0].replace(regexCommaString, ',');
  return splitVal.join('.');
};

/**
 * 전화번호, 휴대폰 번호 형식 문자열에 '-' 삽입
 * @param {string} str - '-'를 삽입할 번호
 * @return {string}
 */
export const phoneNumberWithDash = (str: string): string => {
  if (!isNotEmptyString(str)) {
    return '';
  }
  return str.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

/**
 * 특정 문자열에서 지정한 HTML Attribute에 해당하는 태그의 자식 문자열을 반환
 * ex) getTagChildrenString({ str: '<div class="test"><p>하늘이</p></div>', tag: 'div', attrName: 'class', attrValue: 'test' }) 호출 시, <p>하늘이</p>를 반환
 * @param {object} options - getTagChildrenString 옵션 설정
 * @param {string} options.str - children 문자열을 추출할 부모 문자열
 * @param {keyof HTMLElementTagNameMap} options.tagName - 찾을 태그명
 * @param {string} options.attrName - 찾을 태그명에 해당하는 속성명
 * @param {string} options.attrValue - 찾을 태그명에 해당하는 속성값
 * @return {string[] | null} - [0]은 부모 문자열, [1]은 자식 문자열
 */
export const getTagChildrenString = ({
  str = '',
  tagName = 'div',
  attrName = 'class',
  attrValue = '',
}: {
  str: string;
  tagName: keyof HTMLElementTagNameMap;
  attrName: string;
  attrValue: string;
}): string[] | null => {
  if (!str.includes(`${attrName}="${attrValue}"`)) {
    return null;
  }

  const pattern = new RegExp(
    `<${tagName}[^>]*${attrName}\\s*=[\\'"]${attrValue}[\\'"][\\s\\S]*?>([\\s\\S]*?)<\\/${tagName}>`,
    'ig',
  );
  const matchStrings = pattern.exec(str);
  return matchStrings && matchStrings.length > 0 ? matchStrings : null;
};

/**
 * 문자열에서 HTML 태그 제거
 * @param {string} val - 태그를 제거할 문자열
 * @return {string}
 */
export const stripTags = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }
  return str.replace(/(<([^>]+)>)/gi, '');
};

/**
 * 특정 문자를 엔티티 문자로 변환
 * @param {string} val - 문자열
 * @return {string}
 */
export const convertSpecialCharactersToSafeHTML = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }
  return str
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

/**
 * 엔티티 문자를 기본 문자로 변환
 * @param {string} val - 문자열
 * @return {string}
 */
export const convertSpecialCharactersToText = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }
  return str
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n/gi, '<br>');
};

/**
 * \n 줄바꿈 문자열을 br 태그로 변환
 * @param {string} val - 문자열
 * @return {string}
 */
export const nl2br = (str: string): string => {
  return str.replace(/\n/g, '<br />');
};

/**
 * 문자열에 중복된 anchor 태그가 있으면 제거
 * @param {string} val - 문자열
 * @return {string}
 */
export const removeDuplicatedAnchorTag = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }
  return str
    .replace(/(?:(<a[^><]*>)){2,}/gi, '$1') // <a href="#"><a href="#"> 중복 태그 제거
    .replace(/(?:<\/a>){2,}/gi, '</a>'); // </a></a> 중복 태그 제거
};

/**
 * 문자열에 script 태그가 있는지 확인
 * @param {string} val - 문자열
 * @return {boolean}
 */
export const checkHasScriptTag = (str: string | undefined): boolean => {
  if (!isNotEmpty(str)) {
    return false;
  }
  return /<script[\s\S]*?>[\s\S]*?<\/script>/gi.test(str);
};

/**
 * http, https, ftp, file이 포함된 문자열을 anchor 태그가 포함된 문자열로 변환
 * @param {string} val - 문자열
 * @return {string}
 */
export const createAnchorTag = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }
  return str
    .replace(/<a[^><]*>|<.a[^><]*>/gi, '')
    .replace(
      /((https?|file):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim,
      '<a href="$1" target="_blank">$1</a>',
    );
};

/**
 * <oembed url=\"https://www.youtube.com/xxxxxx\"></oembed> 가 포함된 문자열을 iframe 유튜브 태그가 포함된 문자열로 변환
 * <iframe></iframe>의 바깥 태그를 <figure class="media"></figure> 태그로 감싸기
 * @param {string} str - 문자열
 * @return {string}
 */
export const createYoutubeIframeTag = (str: string): string => {
  if (!isNotEmpty(str)) {
    return '';
  }

  return str
    .replace(
      /<oembed\s(?:[^>]*?\s+)?url=(?:([^\/]+|[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})+(\\"|")><\/oembed>/im,
      '<iframe src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    )
    .replace(/<figure[^>]*class=\"media\"[^>]*>(.*?)<\/figure>/, '$1')
    .replace(/(<iframe[^><]*>.*?<\/iframe>)/gi, '<figure class="media">$1</figure>');
};

/**
 * HTML Body에 div를 동적으로 삽입
 * @param {string} name - id 또는 class에 삽입할 내용
 * @param {string} type - id 또는 class
 * @param {string} tagName - 생성할 태그 이름
 * @return {string}
 */
export const createTagAppendToBody = ({
  name,
  type = 'id',
  tagName = 'div',
}: {
  name: string;
  type?: 'class' | 'id';
  tagName?: string;
}): HTMLElement | Element => {
  const elementPrefix = type === 'id' ? '#' : '.';
  const element = document.querySelector(`${elementPrefix}${name}`);

  if (element) {
    return element;
  }

  const newElement = document.createElement(tagName);
  newElement.setAttribute(type, name);
  document.body.appendChild(newElement);
  return newElement;
};

/**
 * 온점을 포함한 문자열로 객체에 접근
 * @param {object} data - 접근할 객체
 * @param {string} keys - 경로 문자열 ex) item.broadcasting.title
 * @return {unknown}
 */
export const getValueFromDot = <T extends Record<string, any>>(data: T, keys: string) => {
  if (!keys.includes('.')) {
    return data?.[keys] ?? null;
  }

  const splitKeys = keys.split('.');
  if (isNotEmpty(splitKeys)) {
    return splitKeys.reduce((acc, key) => {
      return acc?.[key] ?? acc;
    }, data);
  }
  return data?.[keys] ?? null;
};

/**
 * 온점을 포함한 문자열로 객체에 접근하고 새로운 값 저장
 * @param {object} data - 접근할 객체
 * @param {string} keys - 경로 문자열 ex) item.broadcasting.title
 * @param {string} unknown - 바꿀 값
 * @return {object}
 */
export const setValueFromDot = <T extends Record<string, any>, U extends keyof T & string>(
  data: T,
  keys: U,
  value: T[U] | string,
): T => {
  if (!keys.includes('.')) {
    data[keys] = value as T[U];

    return data;
  }

  const splitKeys: (keyof T)[] = keys.split('.');
  const lastKey = splitKeys.pop();

  if (isNotEmpty(lastKey)) {
    const object = splitKeys.reduce((acc, key) => {
      return acc?.[key] ?? data;
    }, data) as Record<NonNullable<keyof T>, any>;

    object[lastKey] = value;
    return data;
  }
  return data;
};

/**
 * 객체 key, value 변환
 * @param {object} obj - 접근할 객체
 * @return {object}
 */
export const swap = <T extends Record<string, U>, U extends string>(obj: T) => {
  const res: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    res[value] = key;
  });
  return res as { [K in keyof T as T[K]]: K };
};

/**
 * 밀리초를 시간, 분, 초로 나누어 반환
 * @param {number} duration - 변환할 숫자 (밀리초단위)
 * @return {string}
 */
export const getTimeFromMilliSeconds = (
  duration: number,
): {
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const isInValid = isNaN(duration) || duration <= 0;

  return {
    hours: isInValid ? 0 : Math.max(Math.floor(duration / 3600), 0),
    minutes: isInValid ? 0 : Math.max(Math.floor((duration % 3600) / 60), 0),
    seconds: isInValid ? 0 : Math.max(Math.floor((duration % 3600) % 60), 0),
  };
};

/**
 * 재생 시간 초를 01:23:45와 같은 표기로 반환
 * @param {number} time - 변환할 숫자 (밀리초단위)
 * @return {string}
 */
export const convertSecondsToHms = (time: number): string => {
  if (isNaN(time)) {
    return '0:00';
  }

  let result = '';
  const { hours, minutes, seconds } = getTimeFromMilliSeconds(time);

  if (hours > 0) {
    result += `${hours < 10 ? `0${Math.max(hours, 0)}` : hours}:`;
  }
  result += `${hours > 0 && minutes < 10 ? `0${minutes}` : minutes}:`;
  result += `${seconds < 10 ? `0${seconds}` : seconds}`;

  return result;
};

/**
 * 재생 시간 초를 1시간 3분과 같은 표기로 반환
 * @param {number} time - 변환할 숫자 (밀리초단위)
 * @param {string} format - 보여줄 포맷 (hms => 시간, 분 ,초, h => 시간)
 * @return {string}
 */
export const convertSecondsToReadableText = (time: number, format = 'hm'): string => {
  if (isNaN(time)) {
    return '-';
  }

  let result = '';
  const { hours, minutes, seconds } = getTimeFromMilliSeconds(time);

  if (hours > 0 && format.includes('h')) {
    result += `${hours}시간 `;
  }
  if (minutes > 0 && format.includes('m')) {
    result += `${minutes}분 `;
  }
  // 1시간 0분 4초일 때, 1시간 4초로 표기
  if (format.includes('s') || minutes <= 0) {
    result += `${seconds}초`;
  }

  return result;
};

/**
 * 문자열 마지막 '/'를 제거 후 반환 (ex. '/login/' => '/login')
 * @param {string} str - '/'를 제거할 문자열
 * @return {string}
 */
export const removeTrailingSlash = (str: string): string => {
  if (!isNotEmptyString(str)) {
    return str;
  }
  return str.endsWith('/') ? str.slice(0, -1) : str;
};

/**
 * Bearer를 포함한 문자열에서 토큰값 추출
 * @param {string | null} str - 문자열
 * @return {string}
 */
export const extractTokenFromAuthorizationString = (str: string | null) => {
  if (!isNotEmptyString(str)) {
    return str;
  }
  if (!(str.startsWith('Bearer') || str.startsWith('bearer'))) {
    return '';
  }

  const extractTokenRegex = /^(B|b)earer ((?:\.?(?:[A-Za-z0-9-_]+)){3})$/g;
  const token = str.replace(extractTokenRegex, '$2');

  return token;
};

export const extractAppVersion = (str: string | null) => {
  if (!isNotEmptyString(str)) {
    return null;
  }
  if (!str.startsWith('3ProTV/')) {
    return null;
  }

  const version = str.split(' ')?.[0].replace(/3ProTV\//g, '');
  const versionNumbers = version ? version.split('.') : '';

  return {
    version: version || '',
    major: versionNumbers?.[0] || '',
    minor: versionNumbers?.[1] || '',
    patch: versionNumbers?.[2] || '',
  };
};

/**
 * 문자열에서 특정 스타일 속성을 제거 후 반환
 * @param {string} str - '/'를 제거할 문자열
 * @return {string}
 */
export const removeStyleAttributes = (str: string): string => {
  if (!isNotEmptyString(str)) {
    return str;
  }
  return str
    .replace(/(?:font-[^weight]\w+|line-height):[^;\"]*(?:;|\")?\s*/gi, '')
    .replace(/<font[^><]*>|<.font[^><]*>/gi, '')
    .replace(/<o\:p[^><]*>|<.o\:p[^><]*>/gi, '')
    .replace(/(<[^>]+)\s+lang\s*=[\'"].*?[\'"]/gi, '$1')
    .replace(/(<[^>]+)\s+class\s*=[\'"].*?[\'"]/gi, '$1')
    .replace(/(<[^>]+)\s+border\s*=[\'"].*?[\'"]/gi, '$1');
};

/**
 * 카드 번호 마스킹 처리
 * @param {string} cardNumber - 카드 번호 문자열
 * @return {string}
 */
export const formatCardMasking = (cardNumber: string) => {
  if (!isNotEmptyString(cardNumber)) return '-';
  if (cardNumber.length < 6) {
    const cardMatchValue = cardNumber.slice(0, 4);
    return cardMatchValue.replace(/(\d{4})/gi, '$1 **** **** ****');
  } else {
    const cardMatchValue = cardNumber.slice(0, 6);
    return cardMatchValue.replace(/(\d{4})(\d{2})/gi, '$1 $2** **** ****');
  }
};

/**
 * 숫자 1000, 1000000 이상인 경우 소수점 1자리 + 단위 붙은 문자열로 반환
 * @param {number} count - 숫자
 * @return {string}
 */
export const countDisplayText = (count: number) => {
  if (!isNotEmpty(count)) {
    return '';
  }
  const countText = count >= 1000000 ? (count / 1000000).toFixed(1) : count >= 1000 ? (count / 1000).toFixed(1) : count;
  const countSuffix = count >= 1000000 ? 'M' : count >= 1000 ? 'K' : '';
  return `${countText}${countSuffix}`;
};

/**
 * 쿠키 만료 시간을 반환
 * @param {number} days - 쿠키 만료일 (ex. 3이면 3일 후 만료)
 * @return {Date}
 */
export const getCookieExpiresDate = (days = 3) => {
  const date = new Date();
  return new Date(date.getTime() + 1000 * 60 * 60 * 24 * days);
};

/**
 * 10보다 작은 수 앞에 0을 붙여줌
 * @param {number} - 0을 붙일 숫자
 * @return {String}
 */
export const addZeroSuffix = (val: number) => {
  const convertedVal = val.toString();
  return val < 10 ? `0${convertedVal}` : convertedVal;
};

/**
 * 부동 소수점 반올림을 더 정확히 처리하여 반환
 * @param {number} val - 처리할 숫자
 * @return {number}
 */
export const round = (val: number) => {
  const num = isNumeric(val) && typeof val === 'string' ? Number(val) : val;
  return (Math.round(Number((Math.abs(num) * 100).toPrecision(15))) / 100) * Math.sign(num);
};

/**
 * URL path 뒤에 쿼리 파라미터를 붙여 반환
 * @param {string} path - url (ex. https://3protv.com)
 * @param {string} param - 쿼리 파라미터 스트링 (ex. tab=all&keyword=a)
 * @return {string}
 */
export const addParameterToURL = (path: string, param: string) => {
  let url = path;
  if (isNotEmptyString(param)) url += (isNotEmpty(url.split('?')[1]) ? '&' : '?') + param;
  return url;
};

/**
 * 쿠키 스트링 배열에서 쿠키 객체를 반환
 * @param {string[]} cookies - 쿠키 스트링 배열 (ex. ['user_acceess_token=some token; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'])
 * @return {object | null}
 */
export const parseCookie = (cookies: unknown) => {
  if (!Array.isArray(cookies) || !isNotEmpty(cookies)) {
    return null;
  }
  return cookies.reduce((acc, cookie) => {
    const splitValue = cookie.split(';');
    if (!isNotEmpty(splitValue)) {
      return acc;
    }
    const [key, value] = cookie.split(';')[0].split('=');
    return {
      ...acc,
      [decodeURIComponent(key.trim())]: decodeURIComponent(value.trim()),
    };
  }, {});
};

/**
 * 연, 월, 일 값을 n개월 n일 표기로 반환
 * @param {number} year  - 연 숫자
 * @param {number} month - 월 숫자
 * @param {number} day - 일 숫자
 * @return {string}
 */
export const calcMembershipCouponPeriod = ({
  year = 0,
  month = 0,
  day = 0,
}: Record<'year' | 'month' | 'day', number>): string => {
  if (!isNumeric(year) || !isNumeric(month) || !isNumeric(day)) {
    return '';
  }
  let durationText = '';
  if (year > 0 || month > 0) {
    durationText = `${Math.floor((year * 365) / 30) + month}개월 `;
  }
  if (day > 0) {
    durationText = durationText + `${Math.floor((year * 365) % 30) + day}일`;
  }

  return durationText;
};

/**
 * 유료 이용권 갯수, 무료 이용권 일자를 n개월 n일 표기로 반환
 * @param {number} periodCount - 유료 이용권 숫자
 * @param {number} dayCount - 무료 이용권 일자 & 사용중인 이용권의 남은 일자
 * @return {string}
 */
export const calcMembershipCouponTotalPeriod = ({
  periodCount = 0,
  dayCount = 0,
}: Record<'periodCount' | 'dayCount', number>): string => {
  if (!isNumeric(dayCount) || !isNumeric(periodCount)) {
    return '';
  }

  let durationText = '';
  const month = Math.floor(dayCount / 30);
  const day = dayCount % 30;

  const totalMonth = periodCount + month;

  if (totalMonth > 0) {
    durationText = `${totalMonth}개월 `;
  }

  if (day > 0) {
    durationText = durationText + `${day}일`;
  }

  return durationText;
};
