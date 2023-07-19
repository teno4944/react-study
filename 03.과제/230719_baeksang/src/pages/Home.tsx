export const Home = () => {
  return (
    <div className="container-wrap main-page">
      <header className="header-wrap">
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
      <div className="visual-wrap">
        <div className="container-inner">
          <div className="visual">
            <div>
              <img
                src="https://images.jtbc.co.kr/baeksang/2022/visual-baeksang2.png"
                alt="제59회 백상예술대상 Baeksang Arts Award"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrap">
        <div className="container-inner">
          <div>
            <h2 className="day">2023.4.28 5:30PM</h2>
          </div>
          <a className="box-btn" href="/intro">
            <span>자세히 보기</span>
          </a>
        </div>
      </div>
      <div className="vod-wrap">
        <div className="container-inner">
          <div className="wrap">
            <div className="list swiper-container">
              <div className="swiper swiper-wrapper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <ul className="swiper-wrapper">
                  <li className="swiper-slide swiper-slide-active">
                    <a>
                      <span className="thumb" data-vod="VO10682299">
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/baeksangawards/img/20230428_213219_735_1.jpg"
                          alt="VO10682299"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] TV부문 대상 - 박은빈</strong>
                        <span>[59회 백상] TV부문 대상 - 박은빈</span>
                      </span>
                    </a>
                  </li>
                  <li className="swiper-slide swiper-slide-next">
                    <a>
                      <span className="thumb" data-vod="VO10682224">
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/100sangarts/img/20230428_232943_980_1.jpg"
                          alt="VO10682224"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] TV부문 대상 시상자 - 홍정도&amp;엄정화</strong>
                        <span>[59회 백상] TV부문 대상 시상자 - 홍정도&amp;엄정화</span>
                      </span>
                    </a>
                  </li>
                  <li className="swiper-slide">
                    <a>
                      <span className="thumb" data-vod="VO10682213">
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/100sangarts/img/20230428_232818_906_1.jpg"
                          alt="VO10682213"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] 영화부문 대상 - 헤어질 결심</strong>
                        <span>[59회 백상] 영화부문 대상 - 헤어질 결심</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button">
              <a className="prev swiper-button-prev">이전</a>
              <a className="next swiper-button-next">다음</a>
            </div>
          </div>
          <div className="more">
            <a className="box-btn" href="/replay">
              <span>영상 더보기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="dim-wrap">
        <div className="dim-con">
          <button type="button" className="close-btn">
            <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
          </button>
          <div className="replay-area"></div>
        </div>
      </div>
      <div className="sector-wrap final">
        <div className="container-inner">
          <div className="button">
            <a className="box-btn tv nominate-end" href="/awards">
              <span>
                제59회 백상예술대상 <em className="bar"></em>수상자 · 작품 보러가기 <em className="bg"></em>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="notice-wrap">
        <div className="container-inner">
          <h2>
            제59회 백상예술대상 <strong>공지사항</strong>
          </h2>
          <p className="desc">새로운 소식을 전해드립니다.</p>
          <div className="notice">
            <div className="head">
              <h3>공지사항</h3>
              <a href="/notice">
                <span>더보기</span>
              </a>
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="/notice?id=65">
                    <strong>
                      <i>'제59회 백상예술대상' 디지털 생중계 안내</i>
                    </strong>
                    <em>2023.04.27</em>
                    <span>
                      <i>'제59회 백상예술대상' 틱톡 글로벌 생중계 안내</i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="share">
            <a
              className="tiktok"
              href="https://www.tiktok.com/@baeksang.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>틱톡</span>
            </a>
            <a
              className="insta"
              href="https://www.instagram.com/baeksang.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>인스타그램</span>
            </a>
            <a
              className="facebook"
              href="https://www.facebook.com/BaeksangAwards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>페이스북</span>
            </a>
            <a
              className="youtube"
              href="https://www.youtube.com/channel/UCVXN28NHfphVQrdtjooc33g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>유튜브</span>
            </a>
          </div>
        </div>
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
