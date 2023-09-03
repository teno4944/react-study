import { BoardListItemModel } from '@/models/board.model';
import { formatDate } from '@/utils';

export const BoardListItem = ({ id, title, created_at }: BoardListItemModel) => {
  return (
    <tr>
      <td>{id}</td>
      <td className="title">
        <a href={`/notice?id=${id}`}>{title}</a>
      </td>
      <td>{formatDate(created_at, 'YYYY. MM. DD. H:mm')}</td>
    </tr>
  );
};
