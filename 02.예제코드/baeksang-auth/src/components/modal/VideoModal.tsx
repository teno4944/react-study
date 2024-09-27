import { Modal, YoutubePlayer } from '@/components';

import type { VideoItemProps } from '@/models/video.model';
type Props = {
  isOpen: boolean;
  onClose: () => void;
  videoData: VideoItemProps;
};

export const VideoModal = ({ isOpen, onClose, videoData }: Props) => {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="absolute top-0 left-0 z-0 w-full h-full" onClick={() => closeModal()}></div>
      <div className="relative flex flex-col items-stretch w-1/2 text-3xl text-center min-w-[400px] min-h-[300px] z-1">
        <div className="absolute right-0 -top-[70px]">
          <button type="button" onClick={() => closeModal()}>
            <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
          </button>
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-hidden bg-white rounded-md">
          {/* <div className="">
            <h3 className="px-4 py-5">{videoData?.title}</h3>
          </div> */}
          {videoData?.youtube_code ? (
            <div className="absolute bottom-0 w-full h-full">
              <YoutubePlayer youtubeSrc={videoData?.youtube_code} />
            </div>
          ) : (
            <p>잘못된 영상 경로입니다.</p>
          )}
        </div>
      </div>
    </Modal>
  );
};
