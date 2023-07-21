import { useState } from 'react';
import { useMemo } from 'react';
import noticeData from '@/mocks/notices.json';
import { BoardListItem } from '@/components/notice/BoardListItem';
import { BoardItemListProps } from '@/models/board.model';
import { useCallback } from 'react';

type Props = {
  items: BoardItemListProps;
};
export const BoardList = ({ items }: Props) => {
  const startPage = 1;
  const itemPerPage = 5;

  const [page, setPage] = useState(startPage);

  const listItems = useMemo(() => {
    return items.filter((item, index) => index < itemPerPage * page && index >= itemPerPage * (page - 1));
  }, [items, page]);

  const maxPage = useMemo(() => Math.ceil(items.length / itemPerPage), [listItems]);
  const pageList = [...Array(maxPage).keys()].map((x) => x + 1);
  const handleClickPage = useCallback((cur) => {
    setPage((prev) => cur);
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
          {listItems.map((item) => {
            return <BoardListItem key={`notice-${item.id}`} {...item} />;
          })}
        </tbody>
      </table>
      <div className="paging">
        <a className="btn-paging-prev">
          <span className="sp_ico btn-prev">first page</span>
        </a>
        {pageList.map((index) => {
          return (
            <a
              className={index === page ? 'curpage active' : ''}
              key={`page-${index}`}
              onClick={() => handleClickPage(index)}
            >
              {index}
            </a>
          );
        })}
        {/* <a className="curpage active">1</a> */}
        <a className="btn-paging-next">
          <span className="sp_ico btn-next">last page</span>
        </a>
      </div>
    </>
  );
};
