import ReactPlayer from 'react-player';

import type { MainVideoType } from '@/mocks/mainVideos';

type Props = {
  youtubeSrc: MainVideoType['youtubeCode'];
};

export const YoutubePlayer = ({ youtubeSrc }: Props) => {
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${youtubeSrc}`}
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
};
