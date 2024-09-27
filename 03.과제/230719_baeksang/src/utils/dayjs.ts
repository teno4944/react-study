import 'dayjs/locale/ko';

import dayjs, { ConfigType, OpUnitType, UnitType } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';

import { isNotEmpty, isNotEmptyString } from '@/utils/helper';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(relativeTime);

const defaultTimezone = 'Asia/Seoul';

/**
 * 사용자의 타임존을 반환
 * @return {String} - 사용자의 타임존 (ex. 'Asia/Seoul')
 */
export const getUserTimezone = () => dayjs.tz.guess();

/**
 * 일반 문자열을 Day.js 객체로 반환, 만약 날짜가 없다면 오늘 날짜에 대한 Day.js 객체를 반환
 * @param {String} date - 날짜로 인식할 수 있는 일반 문자열
 * @return {String} - Day.js 객체
 */
export const getDateObjectFromString = (date?: string) => {
  if (!date) {
    return dayjs();
  }
  return dayjs(date);
};

/**
 * 날짜를 특정 형식으로 표기
 * 날짜로 인식되지 않는 경우, 날짜 문자열 그대로 반환
 * @param {ConfigType} date - 날짜
 * @param {String} format - 날짜 형식
 * @return {String}
 */
export const formatDate = (date: ConfigType, format = 'YYYY. M. D.', invalidMessage = ''): string => {
  const isInvalidDate = !date || !dayjs(date).isValid();

  if (isInvalidDate) {
    return invalidMessage;
  }

  const isClient = typeof window !== 'undefined';
  const userTimezone = isClient ? getUserTimezone() : defaultTimezone;
  return dayjs(date).tz(userTimezone).format(format);
};

/**
 * 날짜를 fromNow() 형식(하루 전, 1시간 전 등)으로 표기
 * 오늘로부터 N일 전까지 fromNow() 형식, 아니면 지정한 format 형식으로 반환
 * @param {Date | String} date - 날짜
 * @param {Number} day - 오늘로부터 N일 전까지 fromNow() 형식으로 표기할 것인지
 * @param {String} format - 날짜 형식
 * @return {String}
 */
export const formatFromNow = ({
  date = '',
  day = 999999999, // format 없이 fromNow()만 사용하려는 경우 무한대로 설정
  format = 'YYYY-MM-DD HH:mm',
}: {
  date: ConfigType;
  day?: number;
  format?: string;
}): string => {
  const absoluteDateFormat = 'YYYY-MM-DD';
  const today = dayjs().format(absoluteDateFormat);
  const absoluteDate = dayjs(date).format(absoluteDateFormat);
  const diffDay = dayjs(today).diff(absoluteDate, 'day');

  if (diffDay > day) {
    return dayjs(date).format(format);
  }
  if (diffDay < 1) {
    return dayjs(date).fromNow();
  }
  return dayjs(absoluteDate).from(today);
};

/**
 * 특정일이 기준일 사이이면 true 반환
 * 기준일이 없는 경우 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} startDate - 기준 시작일
 * @param {Date | String} endDate - 기준 종료일
 * @param {Date | String} unit - 비교 단위 (year, quarter, month, week, isoWeek, date, day, hour, minute, second)
 * @return {String}
 */

export const isBetweenDate = (
  date: ConfigType,
  startDate: ConfigType,
  endDate: ConfigType,
  unitType: OpUnitType = 'date',
): boolean => {
  if (!isNotEmpty(date) || !isNotEmpty(startDate) || !isNotEmpty(endDate)) {
    return false;
  }
  return dayjs(date).isBetween(startDate, endDate, unitType, '[]');
};

/**
 * 특정일이 기준일과 같으면 true 반환
 * 기준일이 없는 경우 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {String}
 */

export const isSameDate = (date: ConfigType, compareDate?: ConfigType): boolean => {
  if (!isNotEmpty(date)) {
    return false;
  }
  return compareDate ? dayjs(date).isSame(dayjs(compareDate), 'day') : dayjs(date).isSame(dayjs(), 'day');
};

/**
 * 특정일이 기준일과 같거나 기준일보다 후일이라면 true 반환
 * 기준일이 없는 경우 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {String}
 */

export const isSameOrAfterDate = (date: ConfigType, compareDate?: ConfigType): boolean => {
  if (!isNotEmpty(date)) {
    return false;
  }
  return compareDate ? dayjs(date).isSameOrAfter(dayjs(compareDate)) : dayjs(date).isSameOrAfter(dayjs());
};

/**
 * 특정일이 기준일과 같거나 기준일보다 전일이라면 true 반환
 * 기준일이 없는 경우 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {String}
 */

export const isSameOrBeforeDate = (date: ConfigType, compareDate?: ConfigType): boolean => {
  if (!isNotEmpty(date)) {
    return false;
  }
  return compareDate ? dayjs(date).isSameOrBefore(dayjs(compareDate)) : dayjs(date).isSameOrBefore(dayjs());
};

/**
 * 특정일이 기준일과의 차이가 비교 값 이내이고, 0 이상이면 true 반환
 * 기준일이 없는 경우 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @param {Number} withinValue - 비교 값
 * @param {String} type - 비교 타입
 * @return {boolean}
 */

export const isSameOrWithinDate = ({
  date = dayjs(),
  compareDate,
  withinValue,
  type,
}: {
  date: ConfigType;
  compareDate?: ConfigType;
  withinValue: number;
  type: UnitType;
}): boolean => {
  const targetCompareDate = isNotEmpty(compareDate) ? dayjs(compareDate) : dayjs();
  const targerDate = isNotEmptyString(date) ? dayjs(date) : dayjs();

  const isSameOrAfterDate = targerDate.isSameOrAfter(targetCompareDate);
  const compareValue = targerDate.diff(targetCompareDate, type);

  return isSameOrAfterDate && compareValue < withinValue;
};

/**
 * 특정일이 주말인지 확인, 날짜가 없으면 현재 시간을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @return {Number}
 */
export const isWeekendDate = (date?: ConfigType): boolean => {
  const indexOfDay = !date ? dayjs().day() : dayjs(date).day();
  return [0, 6].includes(indexOfDay);
};

/**
 * 특정 일자 만큼 더하거나 뺀 날짜로 반환
 * 날짜로 인식되지 않는 경우, 날짜 문자열 그대로 반환
 * @param {Date | String} date - 날짜
 * @param {number} days - 날짜 형식
 * @return {String}
 */
// FIXME: 개선 필요
export const addDays = (date: ConfigType, days: number) => {
  if (date) {
    if (!dayjs(date).isValid()) {
      return date.toString();
    }

    if (typeof date !== 'string') {
      date = date.toString();
    }

    // FIXME: .이 포함된 날짜인 경우 - 로 replace 필요
    return dayjs(date).add(days, 'days');
  }
  return dayjs().toString();
};

/**
 * 특정일로부터 남은 기준일 수 반환
 * 기준일이 없는 경우 오늘을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {number | null} - 남은 일수 반환 | date 가 비어있을 때 null 반환
 */
export const remainingDays = (date: ConfigType, compareDate?: ConfigType): number | null => {
  if (!isNotEmpty(date)) {
    return null;
  }
  return compareDate ? dayjs(date).diff(dayjs(compareDate), 'day') : dayjs(date).diff(dayjs(), 'day');
};

// FIXME: diff 관련 함수 일괄 리팩토링 필요
/**
 * 특정일로부터 남은 기준 시간수 반환
 * 기준일이 없는 경우 오늘을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {number | null} - 남은 시간수 반환 | date 가 비어있을 때 null 반환
 */
export const remainingHours = (date: ConfigType, compareDate?: ConfigType): number | null => {
  if (!isNotEmpty(date)) {
    return null;
  }
  return compareDate ? dayjs(date).diff(dayjs(compareDate), 'hour') : dayjs(date).diff(dayjs(), 'hour');
};

/**
 * 특정일로부터 남은 기준 분수 반환
 * 기준일이 없는 경우 오늘을 기준일로 설정
 * @param {Date | String} date - 특정일
 * @param {Date | String} compareDate - 기준일
 * @return {number | null} - 남은 분수 반환 | date 가 비어있을 때 null 반환
 */
export const remainingMinutes = (date: ConfigType, compareDate?: ConfigType): number | null => {
  if (!isNotEmpty(date)) {
    return null;
  }
  return compareDate ? dayjs(date).diff(dayjs(compareDate), 'minute') : dayjs(date).diff(dayjs(), 'minute');
};

/**
 * 지금이 장 운영시간인지 확인, 주말 제외 매일 오전 8시 59분 50초부터 오후 3시 30분 10초까지 장 중으로 판단
 * @return {Boolean}
 */
export const checkIsMarketOpen = () => {
  const today = getDateObjectFromString();
  const isWeekend = isWeekendDate(today);

  if (isWeekend) {
    return false;
  }

  const formattedToday = formatDate(today, 'YYYY-MM-DD');
  const marketStartTime = `${formattedToday} 08:59:50`;
  const marketEndTime = `${formattedToday} 15:30:10`;

  return isBetweenDate(today, marketStartTime, marketEndTime, 'second');
};
