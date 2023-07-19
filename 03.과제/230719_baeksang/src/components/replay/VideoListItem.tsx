import type { ReplayItemProps } from '@/models/replay.model';

export const VideoListItem = ({ image, duration_display_time, title }: Partial<ReplayItemProps>) => {
  return (
    <li>
      <a href="#">
        <span className="list-thumb">
          <img src={image} alt={`${title}-미리보기 이미지`} />
          <span className="list-thumb-over">
            <img src="https://images.jtbc.co.kr/baeksang/list_thumb_over_default.png" alt="" />
          </span>
        </span>
        {duration_display_time}
      </a>
      <span className="list-title">{title}</span>
    </li>
  );
};
