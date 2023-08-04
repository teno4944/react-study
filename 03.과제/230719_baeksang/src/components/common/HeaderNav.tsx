import { HeaderNavItem } from '@/components/common/HeaderNavItem';
import { menuItems } from '@/constants/menuItems';
import { HeaderLogo } from '@/components';
import { useCallback, useState } from 'react';
import { SignInModal } from '@/components/modal/SignInModal';

export const HeaderNav = () => {
  const [isSIgnupModalVisible, setIsSIgnupModalVisible] = useState(false);

  const handleSignupButtonClick = useCallback((open: boolean) => {
    setIsSIgnupModalVisible(open);
  }, []);

  return (
    <header className={window.location.pathname === '/' ? 'header-wrap' : 'header-wrap sub'}>
      <div className="container-inner">
        <h1 className="logo">
          <HeaderLogo />
        </h1>
        <div className="gnb">
          <ul className="flex items-center">
            {menuItems.map((item) => {
              return <HeaderNavItem key={item.path} {...item} />;
            })}
            <li className="text-sm text-purple-500 hover:font-bold">
              <button type="button" onClick={() => handleSignupButtonClick(true)}>
                회원가입/로그인
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* 회원가입 모달 레이어 */}
      <SignInModal isOpen={isSIgnupModalVisible} onClose={() => handleSignupButtonClick(false)} />
    </header>
  );
};
