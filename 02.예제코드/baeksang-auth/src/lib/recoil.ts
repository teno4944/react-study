import { AtomEffect } from 'recoil';

import { createStorage, isNotEmpty, isObject } from '@/utils';

export const localStorageEffect =
  <T extends { [key: string]: unknown }>(key: string, allowedStates: string[] = []): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const storage = createStorage('local');
      const savedValue = storage.getItem(key);

      if (isNotEmpty(savedValue)) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue: T, _, isReset: boolean) => {
        if (isReset) {
          storage.removeItem(key);
          return;
        }
        if (isObject(newValue) && isNotEmpty(allowedStates)) {
          const filteredValue = Object.entries(newValue).reduce((acc, [stateKey, stateValue]) => {
            return allowedStates.includes(stateKey) ? { ...acc, ...{ [stateKey]: stateValue } } : acc;
          }, {});
          storage.setItem(key, filteredValue);
        } else {
          storage.setItem(key, newValue);
        }
      });
    }
  };
