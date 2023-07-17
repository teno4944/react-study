export type ReplayItemProps = {
  id: string;
  youtube_code: string;
  awards_no: number;
  image: string;
  duration_display_time: string;
  title: string;
};

export type ReplayItemListProps = ReplayItemProps[];

export type TabItemProps = {
  title: string;
  pathname: string;
  isDefaultItem?: boolean;
};

export type TabItemListProps = TabItemProps[];
