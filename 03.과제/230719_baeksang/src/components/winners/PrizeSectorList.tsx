import { AwardSectorListItem } from '@/components/candidate/AwardSectorListItem';
import winnerData from '@/mocks/winners.json';
import { useParams } from 'react-router-dom';

type Props = {
  awards_no: string;
};
export const PrizeSectorList = ({ awards_no }: Props) => {
  return (
    <>
      {winnerData
        .filter((item) => item.awards_no === awards_no)
        .map((item, idx) => {
          return <AwardSectorListItem {...item} index={idx + 1} />;
        })}
    </>
  );
};
