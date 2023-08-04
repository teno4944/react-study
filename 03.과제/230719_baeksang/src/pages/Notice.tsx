import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BoardDetail } from '@/components/notice/BoardDetail';
import { BoardList } from '@/components/notice/BoardList';
import { isNotEmpty } from '@/utils';

const baseApiUri = import.meta.env.VITE_BASE_API_URI;

export const Notice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = Number(searchParams.get('page') || 1);

  // const noticeId = searchParams.get('id');
  // const noticeItem = noticeData.filter((item) => item.id === noticeId).shift();

  const [data, setData] = useState({});

  const fetchListItems = useCallback(async (pageNum: number) => {
    try {
      const { data } = await axios.get(`${baseApiUri}/notice`, {
        params: {
          page: pageNum,
          size: 5,
        },
      });
      console.log(data);

      setData(data);
    } catch (err) {
      toast.error('공지사항 데이터를 불러오는 데에 에러가 발생했어요.....');
    }
  }, []);

  // 의존 배열이 비어있으면 컴포넌트를 마운트할 때 실행하고 다시 실행하지 않는다.
  useEffect(() => {
    // API를 호출해서 받은 데이터를 setListItems(API 데이터)로 설정한다.
    if (pageNum > 0) {
      fetchListItems(pageNum);
    }
  }, [pageNum]);

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
            {isNotEmpty(data?.itemsList) && <BoardList {...data} />}
            {/* {!noticeId ? <BoardList items={noticeData} /> : <BoardDetail {...noticeItem} />} */}
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
