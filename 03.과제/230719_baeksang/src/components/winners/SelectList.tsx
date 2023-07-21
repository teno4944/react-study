import { SelectListItem } from '@/components/winners/SelectListItem';

type Props = {
  cur_awards_no: number;
};
export const SelectList = ({ cur_awards_no }: Props) => {
  const episodeList = Array.from({ length: 58 }, (_, i) => i + 1);
  return (
    <>
      {episodeList.map((item) => {
        return (
          <SelectListItem key={item} awards_no={item} pathname={`/winners/${item}`} cur_awards_no={cur_awards_no} />
        );
      })}
    </>
  );
};
