import { SelectListItem } from '@/components/winners/SelectListItem';

export const SelectList = () => {
  const episodeList = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      {episodeList.map((item) => {
        const isDefaultItem = item === 58;
        return <SelectListItem awards_no={item} pathname="#" isDefaultItem={isDefaultItem} />;
      })}
    </>
  );
};
