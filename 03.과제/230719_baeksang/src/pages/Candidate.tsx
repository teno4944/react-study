import { CandidateSectorList } from '@/components/candidate/CandidateSectorList';
export const Candidate = () => {
  return (
    <div className="container-wrap sub-page">
      <div className="awards-page">
        <div className="awards-title-wrap sub-title">
          <div className="container-inner">
            <h2>59회 수상자 · 작품</h2>
          </div>
        </div>
        <div className="awards-list-wrap">
          <div className="container-inner">
            <div className="awards-select-con">
              <div className="awards-title sector-title">
                <strong>59회 백상예술대상 수상자 · 작품</strong>
              </div>
              <CandidateSectorList />
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
