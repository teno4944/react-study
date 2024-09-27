import { TabListItem } from '@/components/replay/TabListItem';
import { TabItemListProps } from '@/models/replay.model';
import { PropsWithChildren } from 'react';

type Props = {
  items: TabItemListProps;
};

export const TabList = ({ items, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {items.map(({ title, pathname, isDefaultItem, id }) => {
        return <TabListItem title={title} pathname={pathname} isDefaultItem={isDefaultItem} key={id} id={id} />;
      })}
      {children}
    </>
  );
};
