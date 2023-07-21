import { SelectList } from '@/components/winners/SelectList';
import { useParams } from 'react-router-dom';
import { PrizeSectorList } from '@/components/winners/PrizeSectorList';
import { useState } from 'react';
import { useCallback } from 'react';

export const Winners = () => {
  const { awards_id } = useParams();
  const [isActive, setToggle] = useState(false);
  const toggleSelectBox = useCallback(() => {
    setToggle((isActive) => !isActive);
  }, []);

  const awards_no = Number(awards_id) || 58;
  return (
    <div className="container-wrap sub-page">
      <div className="awards-page">
        <div className="awards-title-wrap sub-title">
          <div className="container-inner">
            <h2>역대 수상</h2>
          </div>
        </div>
        <div className="awards-list-wrap">
          <div className="container-inner">
            <span className={isActive ? 'selectbox_wrap ui_complete active on' : 'selectbox_wrap ui_complete'}>
              <a
                className="select_result"
                title="검색 조건 선택"
                onClick={() => {
                  toggleSelectBox();
                }}
              >
                다른 회차 선택하기<span className="ico-select"></span>
              </a>
              <ul className="sel_list">
                <SelectList cur_awards_no={awards_no} />
              </ul>
            </span>
            <div className="awards-select-con">
              <div className="awards-title sector-title">
                <strong>{awards_no}회 백상예술대상 수상자 · 작품</strong>
              </div>
              <PrizeSectorList awards_no={awards_no} />
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
