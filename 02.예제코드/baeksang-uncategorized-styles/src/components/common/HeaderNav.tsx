import { Link } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className={window.location.pathname === '/' ? 'header-wrap' : 'header-wrap sub'}>
      <div className="container-inner">
        <h1 className="logo">
          <Link to={'/'}>
            <span>제 59회 백상예술대상 Baeksang Arts Award</span>
          </Link>
        </h1>
        <div className="gnb">
          {/* <ul>
            <li onClick={() => mobile && setActive(false)}>
              <Link to={'/intro'} className={handleActiveUrl('/intro')}>
                <span>시상식 소개</span>
              </Link>
            </li>
            <li onClick={() => mobile && setActive(false)}>
              <Link to={'/awards'} className={handleActiveUrl('/awards')}>
                <span> 59회 수상자 · 작품</span>
              </Link>
            </li>
            <li onClick={() => mobile && setActive(false)}>
              <Link to={'/replay'} className={handleActiveUrl('/replay')}>
                <span>다시보기</span>
              </Link>
            </li>
            <li onClick={() => mobile && setActive(false)}>
              <Link to={'/winners'} className={handleActiveUrl('/winners')}>
                <span>역대 수상</span>
              </Link>
            </li>
            <li onClick={() => mobile && setActive(false)}>
              <Link to={'/notice'} className={handleActiveUrl('/notice')}>
                <span>공지사항</span>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};
