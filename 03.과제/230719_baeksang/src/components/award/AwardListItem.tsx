import { AwardItemProps } from '@/models/award.model';

export const AwardListItem = ({ image, award_name, sub_title, title }: AwardItemProps) => {
  return (
    <li>
      <span className="list-thumb">
        <img src={image} alt={`${title} ${award_name}이미지`} />
      </span>
      <span className="title">
        <strong className="title-prize">{award_name}</strong>
        <em>{title}</em>
        {sub_title && <span className="name">{sub_title}</span>}
      </span>
    </li>
  );
};
