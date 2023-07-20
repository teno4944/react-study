import { AwardWinner, AwardItemListProps } from '@/models/award.model';
import { AwardListItem } from '@/components/candidate/AwardListItem';

type Props = {
  awards_no?: string;
  index: number;
  division_name: string;
  has_sector_winner: boolean;
  winner: AwardWinner;
  list: AwardItemListProps;
};
export const AwardSectorListItem = ({ awards_no, index, division_name, has_sector_winner, winner, list }: Props) => {
  return (
    <div className={`awards-sector-wrap sector0${index}`}>
      <div className="award-sector-title">
        <h3>{division_name}</h3>
      </div>
      <div className="awards-con">
        {has_sector_winner && (
          <div className="awards-prize">
            <div className="awards-prize-con">
              <span className="list-thumb">
                <img src={winner.image} alt={`${winner.title}-미리보기`} />
              </span>
              <span className="title">
                <strong className="title-prize">{winner.award_name}</strong>
                <em>{winner.title}</em>
                {winner.sub_title && <span className="name">{winner.sub_title}</span>}
              </span>
            </div>
          </div>
        )}
        <div className="awards-awarded">
          <ul className="awarded-list">
            {list.map((item) => {
              return <AwardListItem key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
