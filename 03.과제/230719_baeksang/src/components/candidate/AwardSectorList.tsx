import candidateData from '@/mocks/candidates.json';
import { AwardSectorListItem } from '@/components/candidate/AwardSectorListItem';
export const AwardSectorList = () => {
  return (
    <>
      {candidateData.map((item, idx) => {
        return <AwardSectorListItem {...item} index={idx + 1} />;
      })}
    </>
  );
};
