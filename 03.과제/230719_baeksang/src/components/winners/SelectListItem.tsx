type Props = {
  pathname: string;
  cur_awards_no: number;
  awards_no: number;
};

export const SelectListItem = ({ awards_no, pathname, cur_awards_no }: Props) => {
  return (
    <li className={awards_no === cur_awards_no ? 'on' : ''}>
      <a href={pathname}>
        <span>{awards_no}회</span>
      </a>
    </li>
  );
};
