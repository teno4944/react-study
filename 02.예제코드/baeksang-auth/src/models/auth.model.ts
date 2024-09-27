export type UserInfoType = {
  id: number | null;
  name: string;
  role: string | null;
  email: string;
};

export type SignUpParams = {
  email: string;
  name: string;
  password: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

export type SignInModel = {
  message: string;
  token: string;
  user: UserInfoType;
};

export type CheckAuthModel = {
  success: boolean;
  token: string;
  user: UserInfoType;
};
