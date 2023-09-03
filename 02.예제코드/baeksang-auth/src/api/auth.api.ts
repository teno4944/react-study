import { createMainClient } from '@/api/client';
import { CheckAuthModel, SignInModel, SignInParams, SignUpParams } from '@/models/auth.model';

const httpClient = createMainClient();

export const checkAuth = async () => {
  return await httpClient.get<CheckAuthModel>('auth/check');
};

export const signUp = async (data: SignUpParams) => {
  return await httpClient.post('auth/signup', data);
};

export const signIn = async (data: SignInParams) => {
  return await httpClient.post<SignInModel>('auth/signin', data);
};
