import { TabList } from '@/components/replay/TabList';
import { useParams } from 'react-router-dom';
import replayData from '@/mocks/replays.json';
import { VideoList } from '@/components/replay/VideoList';

const tabListData = [
  { title: '59회 백상', pathname: '/replay/59', isDefaultItem: true, id: 'tab_2' },
  { title: '58회 백상', pathname: '/replay/58', isDefaultItem: false, id: 'tab_1' },
];

export const Replay = () => {
  const { awards_id } = useParams();
  const id = Number(awards_id) || 59;
  return (
    <div className="container-wrap sub-page">
      <div className="vod-page">
        <div className="notice-title-wrap sub-title">
          <div className="container-inner">
            <h2>다시보기</h2>
            <div className="button">
              <TabList items={tabListData}>
                <a
                  className="box-btn more-btn"
                  href="https://tv.jtbc.co.kr/clip/pr10010312/pm10024332"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>영상 더보기</span>
                  <em className="ico-more"></em>
                </a>
              </TabList>
            </div>
          </div>
        </div>
        <div className="replay-list-wrap">
          <div className="container-inner">
            <div className="nominee-award-sector sector-title">
              <strong className="nominee-award">{id}회 백상예술대상</strong>
            </div>
            <VideoList awardsId={id} items={replayData} />
            <div className="dim-wrap">
              <div className="dim-con">
                <button type="button" className="close-btn">
                  <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
                </button>
                <div className="replay-area"></div>
              </div>
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
