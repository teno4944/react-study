import candidateData from '@/mocks/candidates.json';
import { AwardSectorListItem } from '@/components/award/AwardSectorListItem';
export const CandidateSectorList = () => {
  return (
    <>
      {candidateData.map((item, idx) => {
        return <AwardSectorListItem key={`candidate-${idx}`} {...item} index={idx + 1} />;
      })}
    </>
  );
};
