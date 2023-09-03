import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';

import { checkAuth } from '@/api/auth.api';
import { UserInfoType } from '@/models/auth.model';
import { isNotEmpty } from '@/utils';

type UserContextProps = {
  userInfo: UserInfoType;
  setUserInfo?: Dispatch<SetStateAction<UserInfoType>>;
};

const defaultUserInfo = {
  id: null,
  name: '',
  role: null,
  email: '',
};

export const UserContext = createContext<UserContextProps>({
  userInfo: defaultUserInfo,
});

export const UserProvier = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>(defaultUserInfo);

  const fetchUser = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const {
      data: { success, token, user },
    } = await checkAuth();

    // Local Storage에 있는 토큰으로 auth check
    // 토큰이 올바르다면 userInfo를 setting, 올바르지 않다면 userInfo를 지움
    if (success && isNotEmpty(user)) {
      setUserInfo(user);
      localStorage.setItem('access_token', token);
    } else {
      setUserInfo(defaultUserInfo);
      localStorage.removeItem('access_token');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // localStorage 데이터를 바탕으로 사용자 정보를 가져오거나, 제거한다.
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {!isLoading && <>{children}</>}
    </UserContext.Provider>
  );
};
