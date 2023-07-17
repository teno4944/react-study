import { NavLink, useParams } from 'react-router-dom';

import { TabItemProps } from '@/models/replay.model';

export const TabListItem = ({ title, pathname, isDefaultItem }: TabItemProps) => {
  const { awards_id } = useParams();

  return (
    <li key={pathname}>
      <NavLink to={pathname}>
        {({ isActive }) => (
          <span
            className={
              isActive || (!awards_id && isDefaultItem) ? 'text-blue-500 font-bold underline' : 'text-gray-900'
            }
          >
            {title}
          </span>
        )}
      </NavLink>
    </li>
  );
};
