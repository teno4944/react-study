import { useContext } from 'react';
import { toast } from 'react-toastify';

import { UserContext } from '@/providers';
import { isAxiosError } from '@/utils';
import { signIn } from '@/api/auth.api';
import { SignInModel } from '@/models/auth.model';

type Props = {
  onFail?: () => void;
  onSuccess?: () => void;
  onSettled?: () => void;
};

export type LoginParams = {
  email: string;
  password: string;
};

export const useAuth = ({ onFail, onSuccess, onSettled }: Props) => {
  const { setUserInfo } = useContext(UserContext);

  const onSuccessLogin = (data: SignInModel) => {
    // 데이터에 token값이 있으면 local storage에 저장한다!
    // 이미 local Storage에 값이 있으면 지운다!
    localStorage.clear();
    localStorage.setItem('access_token', data.token);

    // 사용자가 로그인했음을 다른 컴포넌트들이 알 수 있게 setUserInfo()를 호출하여 사용자 정보를 저장한다.
    if (setUserInfo) {
      setUserInfo(data.user);
    }

    // useAuth 훅을 호출할 때 전달 받은 콜백 함수를 실행한다.
    if (onSuccess) {
      onSuccess();
    }
  };

  const login = async (formData: LoginParams) => {
    try {
      const { data } = await signIn(formData);
      console.log(data);

      // 로그인 성공 후 로직
      if (data?.token) {
        onSuccessLogin(data);
      }
    } catch (error: unknown) {
      const defaultMessage = '로그인 중 에러가 발생했어요.';

      if (isAxiosError(error)) {
        if (error?.response) {
          const { data } = error.response;
          toast.error(data?.message || defaultMessage);
        }
      } else {
        toast.error(defaultMessage);
      }

      if (onFail) {
        onFail();
      }
    } finally {
      if (onSettled) {
        onSettled();
      }
    }
  };

  return {
    login,
  };
};
