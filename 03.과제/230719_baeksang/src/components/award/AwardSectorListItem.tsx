import { AwardProps } from '@/models/award.model';
import { AwardListItem } from '@/components/award/AwardListItem';
import cn from '@/utils/mergeClass';

type Props = AwardProps & {
  awards_no?: string;
  className?: string;
};
export const AwardSectorListItem = ({
  className,
  division_name,
  has_sector_winner,
  winner,
  list,
  ...restProps
}: Partial<Props>) => {
  return (
    <div className={cn(`awards-sector-wrap`, className)}>
      {/* <div
        className={cn([
          `awards-sector-wrap`,
          className,
          has_sector_winner && 'test',
          false ? 'scrolled' : 'sticky',
          { red: true },
        ])}
      >
      예시 CN클래스 유틸 사용법
      </div> */}
      <div className="award-sector-title">
        <h3>{division_name}</h3>
      </div>
      <div className="awards-con">
        {has_sector_winner && winner && (
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
            {list &&
              list.map((item, index) => {
                return <AwardListItem key={`award-${index}`} {...item} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
