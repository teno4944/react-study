import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

export type UserTokenType = { token: string };

export type UserInfoType = {
  id: number | null;
  name: string;
  role: string | null;
  email: string;
};

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
  const [userInfo, setUserInfo] = useState<UserInfoType>(defaultUserInfo);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
