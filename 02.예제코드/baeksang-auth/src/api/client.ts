import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { createAxiosInstance } from '@/utils';

export const createMainClient = (options?: InternalAxiosRequestConfig): AxiosInstance => {
  const baseURL = import.meta.env.VITE_BASE_API_URI; // .env 파일에 정의해둔 API URL

  const client = createAxiosInstance({
    config: {
      baseURL,
    },
    // 매 API를 호출할 때마다 localStorage의 token을 request headers에 전달
    onRequest(config) {
      const tokenFromLocalStorage = localStorage.getItem('access_token');

      if (tokenFromLocalStorage) {
        // signIn, signUp 엔드포인트는 headers에 token 전달할 필요가 없으므로 제외
        if (config?.url && !['signin', 'signup'].includes(config.url)) {
          config.headers['X-Access-Token'] = tokenFromLocalStorage;
        }
      }

      return {
        ...config,
        ...options,
      };
    },
  });

  return client;
};
