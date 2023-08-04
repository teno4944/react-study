import { AwardSectorListItem } from '@/components/award/AwardSectorListItem';
import type { AwardProps } from '@/models/award.model';

type Props = {
  listItems: AwardProps[];
};
export const CandidateSectorList = ({ listItems }: Props) => {
  return (
    <>
      {listItems.map((item, idx) => {
        return <AwardSectorListItem key={`candidate-${idx}`} {...item} className={`sector0${idx + 1}`} />;
      })}
    </>
  );
};
