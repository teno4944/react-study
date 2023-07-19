export const BoardView = () => {
  return (
    <div className="container-wrap sub-page">
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
    </div>
  );
};
