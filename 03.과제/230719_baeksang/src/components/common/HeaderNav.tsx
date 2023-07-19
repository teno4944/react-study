import { HeaderNavItem } from '@/components/common/HeaderNavItem';
import { menuItems } from '@/constants/menuItems';
import { HeaderLogo } from '@/components';

export const HeaderNav = () => {
  return (
    <header className={window.location.pathname === '/' ? 'header-wrap' : 'header-wrap sub'}>
      <div className="container-inner">
        <h1 className="logo">
          <HeaderLogo />
        </h1>
        <div className="gnb">
          <ul>
            {menuItems.map((item) => {
              return <HeaderNavItem key={item.path} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
