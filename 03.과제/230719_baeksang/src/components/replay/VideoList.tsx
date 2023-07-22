import { ReplayItemListProps } from '@/models/replay.model';
import { VideoListItem } from '@comps/replay/VideoListItem';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  awardsId: number;
  items: ReplayItemListProps;
};

export const VideoList = ({ awardsId, items }: Props) => {
  const minPage = 1;
  const itemPerPage = 8;

  const [page, setPage] = useState(minPage);

  // props로 받은 awardsId에 해당하는 데이터들
  // awardsId가 59면 59회에 해당하는 더보기 데이터들
  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        return item.awards_no === awardsId;
      }),
    [awardsId, items],
  );

  const maxPage = useMemo(() => Math.ceil(filteredItems.length / itemPerPage), [filteredItems]);

  const listItems = useMemo(() => {
    return filteredItems.filter((item, index) => index < itemPerPage * page);
  }, [filteredItems, page]);

  const loadMoreItems = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, maxPage));
  }, [maxPage]);

  return (
    <div>
      {listItems.length > 0 ? (
        <>
          <ul className="replay-list">
            {listItems.map(({ id, image, duration_display_time, title, youtube_code }) => {
              return (
                <VideoListItem
                  key={id}
                  image={image}
                  duration_display_time={duration_display_time}
                  title={title}
                  youtube_code={youtube_code}
                />
              );
            })}
          </ul>
          {page < maxPage && (
            <div className="list-more">
              <a type="button" className="box-btn" onClick={() => loadMoreItems()}>
                <span>더보기</span>
                <em className="ico-more"></em>
              </a>
            </div>
          )}
        </>
      ) : (
        <p className="p-5 text-purple-700 rounded-sm bg-gray-50">표시할 데이터가 없습니다.</p>
      )}
    </div>
  );
};
