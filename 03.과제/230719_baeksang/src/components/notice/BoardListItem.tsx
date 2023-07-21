type Props = {
  id: string;
  title: string;
  date: string;
  contents: string;
};
export const BoardListItem = ({ id, title, date }: Partial<Props>) => {
  return (
    <tr>
      <td>{id}</td>
      <td className="title">
        <a href={`/notice?id=${id}`}>{title}</a>
      </td>
      <td>{date}</td>
    </tr>
  );
};
