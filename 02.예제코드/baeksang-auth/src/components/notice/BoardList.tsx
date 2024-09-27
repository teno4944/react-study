import { useEffect, useState } from 'react';
import { useMemo } from 'react';

import { BoardListItem } from '@/components/notice/BoardListItem';
import { BoardListModel } from '@/models/board.model';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const BoardList = ({
  itemsList,
  currentPage,
  itemPerPage,
  hasNextPage,
  hasPrevPage,
  pagingCounter,
  nextPage,
  prevPage,
  totalItemCount,
  totalPageCount,
}: BoardListModel) => {
  const navigate = useNavigate();

  const handleClickPage = useCallback((page: number) => {
    navigate(`/notice?page=${page.toString()}&size=5`);
  }, []);

  return (
    <>
      <table>
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map((item) => {
            return <BoardListItem key={`notice-${item.id}`} {...item} />;
          })}
        </tbody>
      </table>
      <div className="paging">
        {currentPage > 1 && (
          <a className="btn-paging-prev">
            <span className="sp_ico btn-prev">first page</span>
          </a>
        )}
        {Array.from({ length: totalPageCount }, (v, i) => i + 1).map((index) => {
          return (
            <a
              className={index === currentPage ? 'curpage active' : ''}
              key={`page-${index}`}
              onClick={() => handleClickPage(index)}
            >
              {index}
            </a>
          );
        })}
        {hasNextPage && (
          <a className="btn-paging-next">
            <span className="sp_ico btn-next">last page</span>
          </a>
        )}
      </div>
    </>
  );
};
