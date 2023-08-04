import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { createAxiosInstance, isNotEmpty } from '@/utils';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const commonConfig = { baseURL };

const commonRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const { headers } = config;

  const setHeader = () => {
    // if (isNotEmpty(headers)) {
    //   const isServerSide = typeof window === 'undefined';
    //   const { apiCallToken, userAccessToken } = getToken();
    //   const clientSideToken = isNotEmpty(userAccessToken)
    //     ? userAccessToken
    //     : isNotEmpty(apiCallToken)
    //     ? apiCallToken
    //     : '';
    //   // api_call_token이 존재할 때만 axios global header를 설정, 존재하지 않는다면 제거 처리
    //   if (isNotEmpty(clientSideToken)) {
    //     headers['Authorization'] = `Bearer ${clientSideToken}`;
    //   } else if (!isServerSide) {
    //     delete headers['Authorization'];
    //   }
    //   if (isNotEmpty(clientContext)) {
    //     headers['X-Client-Context'] = clientContext;
    //   }
    // }
  };

  setHeader();

  return config;
};

const commonErrorInterceptor = (error: AxiosError) => {
  // const { response } = error;
  // const { apiCallToken, userAccessToken, userRefreshToken } = getToken();
  // const errorCode = response?.status ?? 0;
  // const isUnauthorized = errorCode === 401;
  // const isExpiredToken = errorCode === 410;
  // if (isUnauthorized || isExpiredToken) {
  //   if (apiCallToken) {
  //     // clearApiCallToken();
  //   }
  //   if (userAccessToken || userRefreshToken) {
  //     // clearAuthorizationToken();
  //   }
  // }
};

const mainClient = createAxiosInstance({
  config: {
    ...commonConfig,
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
  onRequest: commonRequestInterceptor,
  onError: commonErrorInterceptor,
});

const fileUploadClient = createAxiosInstance({
  config: {
    ...commonConfig,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  onRequest: commonRequestInterceptor,
  onError: commonErrorInterceptor,
});

const fileDownloadClient = createAxiosInstance({
  config: {
    baseURL: '',
    responseType: 'blob',
    withCredentials: false,
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    data: {},
  },
  onError: commonErrorInterceptor,
});

export { fileDownloadClient, fileUploadClient, mainClient };
