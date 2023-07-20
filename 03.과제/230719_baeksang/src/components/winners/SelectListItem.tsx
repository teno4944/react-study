import { NavLink } from 'react-router-dom';

type Props = {
  pathname: string;
  isDefaultItem: boolean;
  awards_no: number;
};

export const SelectListItem = ({ awards_no, pathname, isDefaultItem }: Props) => {
  return (
    <NavLink className={({ isActive }) => (isActive || isDefaultItem ? 'on' : '')} to={pathname}>
      <span>{awards_no}회</span>
    </NavLink>
  );
};
