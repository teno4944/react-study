import { BoardAuthorModel, BoardCountModel, BoardItemDetailModel } from '@/models/board.model';

type Props = {
  cnt: BoardCountModel;
  author?: BoardAuthorModel;
  title: string;
};
export const BoardViewHeader = ({ cnt, author, title }: Props) => {
  return (
    <>
      <h3 className="veiw_tit">{title}</h3>
      <div className="text-sm text-right text-gray-400">
        <span className="pr-2 ">작성자: {author?.name}</span>
        <span className=""> 👍 {cnt?.view}</span>
      </div>
    </>
  );
};
