import { Modal } from '@/components';
import { useMemo, useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInModal = ({ isOpen, onClose }: Props) => {
  // 회원가입을 보여줄지 로그인을 보여줄지 판단값
  const [signInVisible, setSignInVisible] = useState(false);

  const modalTitle = useMemo(() => (signInVisible ? '회원가입' : '로그인'), [signInVisible]);

  const footerTuttonLabel = useMemo(() => {
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
          </div>
          <p className="px-4 py-3 text-sm text-gray-900 bg-slate-300">
            <button type="button" onClick={toggleSignInVisible}>
              {footerTuttonLabel}
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};
