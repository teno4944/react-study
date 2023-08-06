import { UserContext, UserInfoType, UserTokenType } from '@/Providers';
import { Modal } from '@/components';
import axios, { isAxiosError } from 'axios';
import { FormEventHandler, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const baseApiUri = import.meta.env.VITE_BASE_API_URL;

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

  const { setUserInfo } = useContext(UserContext);

  // 로그인
  const SignInForm = ({ onClose }: { onClose: Props['onClose'] }) => {
    const [isPendding, setIsPendding] = useState(false);
    const onChangeInputValue = (key: string, value: string) => {
      setFromData((prev) => ({ ...prev, [key]: value }));
    };
    const [formData, setFromData] = useState({
      email: 'test01@test.com',
      password: '1234',
    });
    const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      if (formData.email == '' || formData.email == null || formData.email == undefined) {
        alert('유효하지 않음');
        return;
      }
      if (isPendding) {
        return;
      }
      try {
        const { data } = await loginUser();
        // data token 이 있으면 로컬 스토리지에 저장
        if (data?.token) {
          onSuccessLogin(data);
        }
        // test@test.com 1234 admin@admin.com 1234
      } catch (error: unknown) {
        const defaultErrorMsg = '회원가입중 에러가 발생했어요.....';
        console.log(error);
        if (isAxiosError(error)) {
          console.log(error?.response?.data);
          if (error.response) {
            const { data } = error.response;
            toast.error(data.message || defaultErrorMsg);
          } else {
            toast.error(defaultErrorMsg);
          }
        }
      } finally {
        setIsPendding(false);
      }
    };
    const loginUser = async () => {
      const url = `${baseApiUri}/auth/signin`;
      return await axios.post(url, formData);
    };
    const onSuccessLogin = (data: UserTokenType & { user: UserInfoType }) => {
      // 데이터에 token값이 있으면 local storage에 저장한다!
      localStorage.setItem('access_token', data.token);

      // 사용자가 로그인했음을 다른 컴포넌트들이 알 수 있게 setUserInfo()를 호출하여 사용자 정보를 저장한다.
      if (setUserInfo) {
        setUserInfo(data.user);
      }

      // 모달을 닫는다!
      onClose();
    };
    return (
      <section>
        <form onSubmit={handleForm}>
          <div className="relative z-10 flex flex-col items-start justify-start pt-0 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
            <p className="w-full font-serif text-4xl font-medium leading-snug text-center">Sign In</p>
            <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                  Email
                </p>
                <input
                  type="text"
                  placeholder="이메일"
                  value={formData.email}
                  className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={(e) => {
                    onChangeInputValue('email', e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                  Password
                </p>
                <input
                  type="text"
                  placeholder="패스워드"
                  value={formData.password}
                  className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={(e) => {
                    onChangeInputValue('password', e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <button
                  disabled={isPendding}
                  type="submit"
                  className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-sm text-xl text-center text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 ease"
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

  const SignUpForm = () => {
    const [isPendding, setIsPendding] = useState(false);
    const onChangeInputValue = (key: string, value: string) => {
      setFromData((prev) => ({ ...prev, [key]: value }));
    };
    const [formData, setFromData] = useState({
      email: '',
      name: '',
      password: '',
    });
    const createUser = async () => {
      const url = `${baseApiUri}/auth/signup`;
      return await axios.post(url, formData);
    };
    const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      if (formData.email == '' || formData.email == null || formData.email == undefined) {
        alert('유효하지 않음');
        return;
      }
      if (isPendding) {
        return;
      }
      try {
        console.log(1);
        await createUser();
        console.log(2);
      } catch (error: unknown) {
        const defaultErrorMsg = '회원가입중 에러가 발생했어요.....';
        console.log(error);
        if (isAxiosError(error)) {
          console.log(error?.response?.data);
          if (error.response) {
            const { data } = error.response;
            toast.error(data.message || defaultErrorMsg);
          } else {
            toast.error(defaultErrorMsg);
          }
        }
      } finally {
        console.log(4);
        setIsPendding(false);
      }
    };
    return (
      <section>
        <form onSubmit={handleForm}>
          <div className="relative z-10 flex flex-col items-start justify-start pt-0 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
            <p className="w-full font-serif text-4xl font-medium leading-snug text-center">Sign up for an account</p>
            <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                  Email
                </p>
                <input
                  type="text"
                  placeholder="이메일"
                  value={formData.email}
                  className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={(e) => {
                    onChangeInputValue('email', e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                  Username
                </p>
                <input
                  type="text"
                  className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => {
                    onChangeInputValue('name', e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 text-sm text-gray-600 bg-white">
                  Password
                </p>
                <input
                  type="text"
                  placeholder="패스워드"
                  value={formData.password}
                  className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={(e) => {
                    onChangeInputValue('password', e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <button
                  disabled={isPendding}
                  type="submit"
                  className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-sm text-xl text-center text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 ease"
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
            {signInVisible ? SignUpForm() : SignInForm({ onClose })}
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
