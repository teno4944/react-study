import { useSearchParams } from 'react-router-dom';
import { BoardList } from '@/components/notice/BoardList';
import { BoardDetail } from '@/components/notice/BoardDetail';
import noticeData from '@/mocks/notices.json';

export const Notice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const noticeId = searchParams.get('id');
  const noticeItem = noticeData.filter((item) => item.id === noticeId).shift();
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
            {!noticeId ? <BoardList items={noticeData} /> : <BoardDetail {...noticeItem} />}
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
