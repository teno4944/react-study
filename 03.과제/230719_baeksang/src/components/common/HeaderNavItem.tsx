import { NavLink } from 'react-router-dom';

type Props = {
  path: string;
  name: string;
};

export const HeaderNavItem = ({ path, name }: Props) => {
  return (
    <li key={path}>
      <NavLink to={path} className={({ isActive }) => (isActive ? 'on' : '')}>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};
