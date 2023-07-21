import noticeData from '@/mocks/notices.json';
import { BoardListItem } from '@/components/notice/BoardListItem';
import { BoardItemListProps } from '@/models/board.model';
type Props = {
  items: BoardItemListProps;
};
export const BoardList = ({ items }: Props) => {
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
          {items.map((item) => {
            return <BoardListItem key={`notice-${item.id}`} {...item} />;
          })}
        </tbody>
      </table>
      <div className="paging">
        <a className="btn-paging-prev">
          <span className="sp_ico btn-prev">first page</span>
        </a>
        <a className="curpage active">1</a>
        <a className="btn-paging-next">
          <span className="sp_ico btn-next">last page</span>
        </a>
      </div>
    </>
  );
};
