import axios from 'axios';
import { FormEventHandler, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { Modal } from '@/components';
import { SignInForm, SignUpForm } from '@/components/modal';
import { UserContext, UserInfoType, UserTokenType } from '@/providers';
import { isAxiosError } from '@/utils';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInModal = ({ isOpen, onClose }: Props) => {
  // 회원가입을 보여줄지 로그인을 보여줄지 판단값
  const [signInVisible, setSignInVisible] = useState(false);

  const modalTitle = useMemo(() => (signInVisible ? '회원가입' : '로그인'), [signInVisible]);

  const footerButtonLabel = useMemo(() => {
    return signInVisible ? '이미 계정이 있어요!' : '계정을 새로 만들고 싶어요!';
  }, [signInVisible]);

  const toggleSignInVisible = () => {
    setSignInVisible(!signInVisible);
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="relative flex flex-col items-stretch w-1/2 text-3xl text-center min-w-[400px] min-h-[300px]">
        <div className="absolute right-0 -top-[70px]">
          <button type="button" onClick={onClose}>
            <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
          </button>
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-hidden bg-white rounded-md">
          <div className="">
            <h3 className="px-4 py-5">{modalTitle}</h3>
            {/* 회원가입일 때는 회원가입 Form을 보여주고, 반대일 때는 로그인 Form을 보여준다. */}
            {signInVisible ? <SignUpForm onClose={onClose} /> : <SignInForm onClose={onClose} />}
          </div>
          <p className="px-4 py-3 text-sm text-gray-900 bg-slate-300">
            <button type="button" onClick={toggleSignInVisible}>
              {footerButtonLabel}
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};
