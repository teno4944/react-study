interface CustomStorage {
  setItem: (key: string, value: unknown) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
  removeAllItems: () => void;
  clear: () => void;
}

export const createStorage = (type: 'session' | 'local'): CustomStorage => {
  if (typeof window !== 'undefined') {
    const storage: Storage = type === 'session' ? window.sessionStorage : window.localStorage;

    return {
      setItem(key, value) {
        storage.setItem(key, JSON.stringify(value));
      },
      getItem(key) {
        return storage.getItem(key);
      },
      removeItem(key) {
        storage.removeItem(key);
      },
      removeAllItems() {
        Object.keys(storage).map((key = '') => {
          storage.removeItem(key);
        });
      },
      clear() {
        storage.clear();
      },
    };
  } else {
    return {} as CustomStorage;
  }
};
