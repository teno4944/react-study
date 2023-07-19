export const Notice = () => {
  return (
    <div className="container-wrap sub-page">
      <header className="header-wrap sub">
        <div className="container-inner">
          <h1 className="logo">
            <a href="/">
              <span>제59회 백상예술대상 Baeksang Arts Award</span>
            </a>
          </h1>
          <div className="gnb">
            <ul>
              <li>
                <a className="" href="/intro">
                  <span>시상식 소개</span>
                </a>
              </li>
              <li>
                <a className="" href="/awards">
                  <span>59회 수상자 · 작품</span>
                </a>
              </li>
              <li>
                <a className="" href="/replay">
                  <span>다시보기</span>
                </a>
              </li>
              <li>
                <a className="" href="/winners">
                  <span>역대 수상</span>
                </a>
              </li>
              <li>
                <a className="on" href="/notice">
                  <span>공지사항</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className="notice-page">
        <div className="notice-title-wrap sub-title">
          <div className="container-inner">
            <h2>공지사항</h2>
          </div>
        </div>
        <div className="notice-title sector-title">
          <div className="container-inner">
            <strong>백상예술대상의 새로운 소식을 전해드립니다.</strong>
          </div>
        </div>
        <div className="tlb-wrap">
          <div className="container-inner">
            <table>
              <colgroup>
                <col></col>
                <col></col>
                <col></col>
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="title">
                    <a href="/notice?id=65">'제59회 백상예술대상' 디지털 생중계 안내</a>
                  </td>
                  <td>2023.04.27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="title">
                    <a href="/notice?id=64">제59회 백상예술대상 4월 28일 개최</a>
                  </td>
                  <td>2023.04.05</td>
                </tr>
              </tbody>
            </table>
            <div className="paging">
              <a className="btn-paging-prev">
                <span className="sp_ico btn-prev">first page</span>
              </a>
              <a className="curpage active">1</a>
              <a className="btn-paging-next">
                <span className="sp_ico btn-next">last page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <a href="#" className="top-wrap">
          <img src="https://images.jtbc.co.kr/baeksang/go_top.png" alt="위로" />
        </a>
      </div>
      <div className="footer-wrap">
        <div className="container-inner">
          <div className="publisher">
            <div className="logo">제59회 백상예술대상</div>
            <div className="copyright">Copyrightⓒ2023 JTBC All Rights Reserved</div>
          </div>
          <div className="sponsor">
            <dl>
              <dt>방송</dt>
              <dd>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc_wh.png" alt="JTBC" />
                </span>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc2_wh.png" alt="JTBC2" />
                </span>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc4_wh.png" alt="JTBC4" />
                </span>
              </dd>
            </dl>
            <dl>
              <dt>디지털 중계</dt>
              <dd>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_tiktok_wh.png" alt="tiktok" />
                </span>
              </dd>
            </dl>
            <dl>
              <dt>협찬</dt>
              <dd>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_tiktok_wh.png" alt="tiktok" />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_paradisecity_wh.png"
                    alt="파라다이스시티"
                  />
                </span>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheon_wh.png" alt="인천광역시" />
                </span>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheontour_wh.png" alt="인천관광공사" />
                </span>
                <span>
                  <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_prizm_wh.png" alt="프리즘" />
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
