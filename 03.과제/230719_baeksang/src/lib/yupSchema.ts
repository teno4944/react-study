import * as Yup from 'yup';

import { emojiRegex } from '@/utils/isEmoji';

const patterns = {
  ko: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
  eng: /[a-zA-Z]/g,
  num: /^[0-9]+$/g,
  space: /[\s]/g,
  special: /[`!@#$%^&*()+=\[\]{};':"\\|,.<>\/?~]+/g,
  name: /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/g,
  nickname: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|]+$/g,
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  phone: /^\\d{3}-\\d{3,4}-\\d{4}$/,
  mobilePhone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/g,
  password: /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*~(),.?":{}|<>_\-+₩=\[\]\'`\/;]).{8,}/,
  emoji: emojiRegex,
};

const schemas = {
  email: Yup.string().required('이메일을 입력해 주세요.').matches(patterns.email, '유효하지 않은 이메일 입니다.'),
};
