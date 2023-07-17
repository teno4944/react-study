export const BoardView = () => {
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
            <div className="tb_view">
              <h3 className="veiw_tit">'제59회 백상예술대상' 디지털 생중계 안내</h3>
              <div className="view_cont">
                <div className="view_cont_txt">
                  <p>중계 일정</p>
                  <p>- 레드카펫 : 2023년 4월 28일(금) 16:00~17:00 (KST)</p>
                  <p>- 본식 시상식 : 2023년 4월 28일(금) 17:30~ (KST)</p>
                  <p>
                    <br />
                  </p>
                  <p>채널/플랫폼</p>
                  <p>- 틱톡(TikTok)</p>
                  <p>
                    <br />
                  </p>
                  <p>※ 자세한 사항은 TikTok 앱을 확인해주세요.</p>
                </div>
              </div>
            </div>
            <div className="button">
              <a className="box-btn" href="/notice">
                <span>목록</span>
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
