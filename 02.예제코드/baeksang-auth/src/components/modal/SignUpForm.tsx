import axios from 'axios';
import { FormEventHandler, useState } from 'react';
import { toast } from 'react-toastify';

import { isAxiosError } from '@/utils';
import { useAuth } from '@/hooks';

// type을 명시적으로 import할 때 import type을 쓰기도 함
// (암시적) import { LoginParams } from '@/hooks';
// (명시적) import type { LoginParams } from '@/hooks';
import type { LoginParams } from '@/hooks';

type Props = {
  onClose: () => void;
};

// 회원가입
export const SignUpForm = ({ onClose }: Props) => {
  const { login } = useAuth({
    onSuccess() {
      alert('회원가입 끝나서 로그인 시켰다!');
      onClose();
    },
  });

  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState<LoginParams & { name: string }>({
    email: '',
    name: '',
    password: '',
  });

  const onChangeInputValue = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const createUser = async () => {
    const url = `${import.meta.env.VITE_BASE_API_URI}/auth/signup`;
    return await axios.post(url, formData);
  };

  const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (isPending) {
      return;
    }

    setIsPending(true);
    try {
      await createUser();
      await login({
        email: formData.email,
        password: formData.password,
      });
    } catch (error: unknown) {
      const defaultMessage = '회원가입 중 에러가 발생했어요.';

      if (isAxiosError(error)) {
        if (error?.response) {
          const { data } = error.response;
          toast.error(data?.message || defaultMessage);
        }
      } else {
        toast.error(defaultMessage);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <div className="relative z-10 flex flex-col items-start justify-start pt-0 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
          <p className="w-full font-serif text-3xl font-medium leading-snug text-center">Sign up for an account</p>
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
                Username
              </p>
              <input
                type="text"
                placeholder="닉네임"
                value={formData.name}
                onChange={(e) => onChangeInputValue('name', e.target.value)}
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
                가입하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
