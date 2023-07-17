import { TabListItem } from '@/components/replay/TabListItem';
import { TabItemListProps } from '@/models/replay.model';
import { PropsWithChildren } from 'react';

type Props = {
  items: TabItemListProps;
};

export const TabList = ({ items, children }: PropsWithChildren<Props>) => {
  return (
    <ul>
      {items.map(({ title, pathname, isDefaultItem }) => {
        return <TabListItem title={title} pathname={pathname} isDefaultItem={isDefaultItem} />;
      })}
      {children}
    </ul>
  );
};
