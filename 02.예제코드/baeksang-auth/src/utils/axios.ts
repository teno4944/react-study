import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  CreateAxiosDefaults,
} from 'axios';

interface AxiosClient {
  config?: CreateAxiosDefaults;
  onRequest?: (config: InternalAxiosRequestConfig, cancelTokenSource?: CancelTokenSource) => InternalAxiosRequestConfig;
  onResponse?: (response: AxiosResponse) => AxiosResponse;
  onError?: (error: AxiosError) => void;
}

const defaultAxiosInstanceOptions = {
  baseURL: '/',
  timeout: 10000,
};

const defaultAxiosInstanceHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const isAxiosError = axios.isAxiosError;
const isValidInterceptor = (interceptor: unknown) => typeof interceptor === 'function';

const createAxiosInstance = ({ config, onRequest, onResponse, onError }: AxiosClient = {}): AxiosInstance => {
  const client = axios.create({
    ...defaultAxiosInstanceOptions,
    headers: defaultAxiosInstanceHeaders,
    ...config,
  });
  const handleError = (error: AxiosError) => {
    if (onError) {
      onError(error);
    }
    return Promise.reject(error);
  };

  client.interceptors.request.use((config) => {
    if (onRequest && isValidInterceptor(onRequest)) {
      return onRequest(config);
    }
    return config;
  }, handleError);

  client.interceptors.response.use((response) => {
    if (onResponse && isValidInterceptor(onResponse)) {
      return onResponse(response);
    }
    return response;
  }, handleError);

  return client;
};

export { createAxiosInstance, isAxiosError };
