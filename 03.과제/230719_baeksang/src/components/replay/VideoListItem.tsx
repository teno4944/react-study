import type { ReplayItemProps } from '@/models/replay.model';

export const VideoListItem = ({ image, duration_display_time, title }: Partial<ReplayItemProps>) => {
  return (
    <li>
      <a href="#">
        <span>
          <img src={image} alt={`${title}-미리보기 이미지`} />
        </span>
        {duration_display_time}
      </a>
      <h3>{title}</h3>
    </li>
  );
};
