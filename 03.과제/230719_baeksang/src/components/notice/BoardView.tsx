import { BoardViewContents } from '@/components/notice/BoardViewContents';
import { BoardViewHeader } from '@/components/notice/BoardViewHeader';
import { BoardItemDetailModel, BoardItemModel } from '@/models/board.model';
import { BoardViewFooter } from '@/components/notice/BoardViewFooter';
import { BoardViewComments } from '@/components/notice/BoardViewComment';

export const BoardView = ({ itemsList }: BoardItemModel) => {
  const item: BoardItemDetailModel = itemsList[0];

  return (
    <>
      <div className="tb_view">
        <BoardViewHeader author={item.author} cnt={item.cnt} title={item.title} />
        <BoardViewContents contents={item.contents} />
        <BoardViewComments comments={item.comments} pr_id={Number(item.id)} />
        <BoardViewFooter prevItem={item.prevItem} nextItem={item.nextItem} />
      </div>
    </>
  );
};
