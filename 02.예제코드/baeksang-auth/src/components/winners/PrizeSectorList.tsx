import { AwardSectorListItem } from '@/components/award/AwardSectorListItem';
import winnerData from '@/mocks/winners.json';

type Props = {
  awards_no: number;
};
export const PrizeSectorList = ({ awards_no }: Props) => {
  return (
    <>
      {winnerData
        .filter((item) => item.awards_no === String(awards_no))
        .map((item, idx) => {
          return <AwardSectorListItem key={`prize-${idx}`} {...item} index={idx + 1} />;
        })}
    </>
  );
};
