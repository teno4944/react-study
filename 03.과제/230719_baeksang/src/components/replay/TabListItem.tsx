import { NavLink, useParams } from 'react-router-dom';

import { TabItemProps } from '@/models/replay.model';

export const TabListItem = ({ title, pathname, isDefaultItem, id }: TabItemProps) => {
  const { awards_id } = useParams();

  return (
    <NavLink
      className={({ isActive }) =>
        isActive || (!awards_id && isDefaultItem) ? 'box-btn timeof2 on' : 'box-btn timeof1'
      }
      to={pathname}
    >
      <span>{title}</span>
    </NavLink>
  );
};
