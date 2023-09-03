import { CandidateSectorList } from '@/components/candidate/CandidateSectorList';
import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
const baseApiUri = import.meta.env.VITE_BASE_API_URI; // .env 파일에 정의해둔 API URL

export const Candidate = () => {
  const [listItems, setListItems] = useState([]);

  // API를 호출해서 받은 데이터를 setListItems(API데이터)로 설정한다
  const fetchListItems = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseApiUri}/candidates`);
      setListItems(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 의존 배열이 비어있으면 컴포넌트를 마운트할 때 실행하고 다시 실행하지 않는다.
  useEffect(() => {
    (async () => {
      await fetchListItems();
    })();
  }, []);

  return (
    <div className="container-wrap sub-page">
      <div className="awards-page">
        <div className="awards-title-wrap sub-title">
          <div className="container-inner">
            <h2>59회 수상자 · 작품</h2>
          </div>
        </div>

        {/* <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count 값을 1씩 올려볼게용
        </button> */}

        <div className="awards-list-wrap">
          <div className="container-inner">
            <div className="awards-select-con">
              <div className="awards-title sector-title">
                <strong>59회 백상예술대상 수상자 · 작품</strong>
              </div>
              <CandidateSectorList listItems={listItems} />
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
