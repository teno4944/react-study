export type AwardItemProps = {
  id?: string;
  award_name: string;
  sub_title: string;
  image: string;
  title: string;
};

export type AwardItemListProps = AwardItemProps[];

export type AwardWinner = {
  image?: string;
  award_name?: string;
  title?: string;
  sub_title?: string;
};

export type AwardProps = {
  division: string;
  division_name: string;
  has_sector_winner: boolean;
  winner: AwardWinner;
  list: AwardItemListProps;
};
