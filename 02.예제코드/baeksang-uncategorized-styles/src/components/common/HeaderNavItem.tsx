import { NavLink } from 'react-router-dom';

type Props = {
  path: string;
  name: string;
};

export const HeaderNavItem = ({ path, name }: Props) => {
  return (
    <li key={path}>
      <NavLink to={path}>
        {({ isActive }) => (
          <span className={isActive ? 'text-blue-500 font-bold underline' : 'text-gray-900'}>{name}</span>
        )}
      </NavLink>
    </li>
  );
};
