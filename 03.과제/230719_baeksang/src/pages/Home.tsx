import { MainVideoSlider } from '@/components/home';
import ScrollAnimation from 'react-animate-on-scroll';

export const Home = () => {
  return (
    <div className="container-wrap main-page">
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
        <div className="flex items-center justify-center container-inner w-[100%] h-[100%] flex-col">
          <ScrollAnimation animateIn="fadeIn">
            <MainVideoSlider />
            <a className="text-white box-btn" href="/replay">
              <span>영상 더보기</span>
            </a>
          </ScrollAnimation>
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
    </div>
  );
};
