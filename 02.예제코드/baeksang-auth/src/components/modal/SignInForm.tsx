import { FormEventHandler, useState } from 'react';

import { useAuth } from '@/hooks';

// 로그인
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInForm = ({ onClose }: { onClose: Props['onClose'] }) => {
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    email: 'admin@admin.com',
    password: '1234',
  });

  const { login } = useAuth({
    onSuccess() {
      // 로그인 모달창 닫기
      onClose();
    },
    onSettled() {
      setIsPending(false);
    },
  });

  const onChangeInputValue = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (isPending) {
      return;
    }

    setIsPending(true);
    await login(formData);
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <div className="relative z-10 flex flex-col items-start justify-start pt-0 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
          <p className="w-full font-serif text-3xl font-medium leading-snug text-center">Sign In</p>
          <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
            <div className="relative">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">Email</p>
              <input
                type="text"
                placeholder="이메일"
                value={formData.email}
                onChange={(e) => onChangeInputValue('email', e.target.value)}
                className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="relative">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                Password
              </p>
              <input
                type="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={(e) => onChangeInputValue('password', e.target.value)}
                className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                disabled={isPending}
                className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-xl font-medium text-center text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 ease"
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
