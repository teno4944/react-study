import { BoardItemPreviewModel } from '@/models/board.model';

type Props = {
  prevItem?: BoardItemPreviewModel;
  nextItem?: BoardItemPreviewModel;
};
export const BoardViewFooter = ({ prevItem, nextItem }: Props) => {
  return (
    <div className="tbl_other">
      <ul>
        <li className="prev">
          <strong>이전글</strong>
          <span>
            <a href={'/notice/' + prevItem?.id}>{prevItem?.title}</a>
          </span>
        </li>
        <li className="next">
          <strong>다음글</strong>
          <span>
            <a href={'/notice/' + nextItem?.id}>{nextItem?.title}</a>
          </span>
        </li>
      </ul>
      <div className="button">
        <a className="box-btn" href="/notice">
          <span>목록</span>
        </a>
      </div>
    </div>
  );
};
