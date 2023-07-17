// @/pages 폴더의 페이지 컴포넌트에서 중복된 코드를 찾아 별개의 컴포넌트로 세분화하세요.
// <header>, <footer> 태그는 <Header> <Footer> 컴포넌트로 그 내용을 옮길 수 있지 않을까...?
// 시상식 소개, 수상자/작품 페이지가 나오지 않는 이유도 찾아 보세요.

export const About = () => {
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
                <a className="on" href="/intro">
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
                <a className="" href="/notice">
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
      <div className="about-page">
        <div className="about-title-wrap sub-title">
          <div className="container-inner">
            <h2>시상식 소개</h2>
            <strong>1965년 시작된 최고 권위의 종합예술상</strong>
            <p>
              1965년부터 한국 대중문화 예술의 발전과 예술인의 사기진작을 위해 제정한 백상예술대상이 올해로 59회째를
              맞이합니다.
              <br />본 상은 지난 1년간 방영, 상영 또는 공연된 TV/영화/연극부문의 제작진과 출연자에게 시상하는 국내
              유일의 종합예술상입니다.
            </p>
            <img src="https://images.jtbc.co.kr/baeksang/2023/about-img.jpg" alt="제59회 백상예술대상" />
          </div>
        </div>
        <div className="schedule-wrap">
          <div className="container-inner">
            <div className="schedule-con">
              <dl>
                <dt>일 시</dt>
                <dd>2023년 4월 28일 (금) 오후 5시 30분</dd>
              </dl>
              <dl>
                <dt>방 송</dt>
                <dd>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc_co.png" alt="JTBC" />
                  </span>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc2_co.png" alt="JTBC2" />
                  </span>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc4_co.png" alt="JTBC4" />
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>협 찬</dt>
                <dd>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_tiktok_co.png" alt="tiktok" />
                  </span>
                  <span>
                    <img
                      src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_paradisecity_co.png"
                      alt="파라다이스시티"
                    />
                  </span>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheon_co.png" alt="인천광역시" />
                  </span>
                  <span>
                    <img
                      src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheontour_co.png"
                      alt="인천관광공사"
                    />
                  </span>
                  <span>
                    <img src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_prizm_co.png" alt="프리즘" />
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="guideline-wrap">
          <div className="container-inner">
            <h3>심사대상 및 기준</h3>
            <div className="guideline-sector">
              <p className="guideline-title">
                <span>TV부문</span>
              </p>
              <p className="guideline-con">
                2022년 4월 1일부터 2023년 3월 31일까지 지상파 종편 케이블 OTT 웹에 제공된 콘텐트로서 최소 4부작 이상,{' '}
                <br />
                연작의 경우 심사일 기준 1/3 이상 방송된 작품이 심사 대상입니다.
                <br />
                신인상은 위 작품에서 일정 분량 주·조연급으로 출연한 출연자로서 데뷔연도와 관계없이
                <br />
                해당 작품을 포함, 3편 이하의 작품에 출연한 경우 후보 자격을 부여합니다.
                <br />
                예술상은 촬영·미술·음악·음향·의상·분장·시각효과·특수효과 등 기술 관련 스태프를 대상으로 합니다.
                <br />
                지난해 후보심사 기간에 맞물려 심사 대상에서 제외된 작품은 올해 심사 대상에 포함됩니다.
              </p>
            </div>
            <div className="guideline-sector">
              <p className="guideline-title">
                <span>영화부문</span>
              </p>
              <p className="guideline-con">
                2022년 4월 1일부터 2023년 3월 31일까지 국내에서 개봉 또는 공개된 한국 장편영화가 심사 대상입니다.
                <br />
                신인상은 위 작품에서 일정 분량 주·조연급으로 출연한 출연자로서 데뷔연도와 관계없이 해당 작품을 포함,{' '}
                <br />
                3편 이하의 작품에 출연한 경우 후보 자격을 부여합니다.
                <br />
                신인 감독상은 위 심사 대상에 해당하는 장편영화로 데뷔한 경우 후보 자격을 부여합니다.
                <br />
                예술상은 촬영·미술·음악·음향·의상·분장·시각효과·특수효과 등 기술 관련 스태프를 대상으로 합니다.
              </p>
            </div>
            <div className="guideline-sector">
              <p className="guideline-title">
                <span>연극부문</span>
              </p>
              <p className="guideline-con">
                2022년 4월 1일부터 2023년 3월 31일까지 국내에서 공연된 한국 연극이 심사 대상입니다.
                <br />
                백상연극상은 위 작품 중 가장 뛰어난 연극적 성과를 갖춘 작품 또는 연극인에게 수여합니다.
                <br />
                작품이 수상하는 경우 작가·연출가·기획자 등 수상작의 예술적 성취에 가장 크게 공헌한 분야의 개인을
                수상자로 지명하며,
                <br />
                개인이 수상하는 경우는 해당연도의 대표작을 명시합니다.
                <br />
                젊은연극상은 미래지향적이며 창의적인 태도로 연극의 새로운 개념과 형식, 미학적 표현에 도전한
                단체·작품·개인에게 수여합니다.
                <em>※ 제 59회 백상예술대상부터 연극부문 연기상은 성별 구분 없이 통합하여 진행합니다.</em>
              </p>
            </div>
          </div>
        </div>
        <div className="sector-title-wrap sub-title">
          <div className="container-inner">
            <h3>시상부문</h3>
            <div className="prize-sector">
              <dl className="tv">
                <dt>TV부문</dt>
                <dd>
                  대상 / 작품상(드라마, 예능, 교양) / 연출상 / 극본상 / 예술상 / 최우수 연기상(남, 여) / 조연상(남, 여)
                  / 신인 연기상(남, 여) / 예능상(남, 여)
                </dd>
              </dl>
              <dl className="movie">
                <dt>영화부문</dt>
                <dd>
                  대상 / 작품상 / 감독상 / 신인 감독상 / 시나리오상 / 예술상 / 최우수 연기상(남, 여) / 조연상(남, 여) /
                  신인 연기상(남, 여)
                </dd>
              </dl>
              <dl className="drama">
                <dt>연극부문</dt>
                <dd>백상 연극상 / 젊은 연극상 / 연기상</dd>
              </dl>
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
