import { Modal, YoutubePlayer } from '@/components';
import type { VideoItemProps } from '@/models/video.model';
import { useEffect, useRef, useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  videoData: VideoItemProps;
};

export const VideoModal = ({ isOpen, onClose, videoData }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen}>
      <div
        ref={modalRef}
        className="relative flex flex-col items-stretch w-1/2 text-3xl text-center min-w-[400px] min-h-[300px]"
      >
        <div className="absolute right-0 -top-[70px]">
          <button type="button" onClick={onClose}>
            <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
          </button>
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-hidden bg-white rounded-md">
          {/* <div className="">
            <h3 className="px-4 py-5">{videoData?.title}</h3>
          </div> */}
          {console.log(videoData?.youtube_code)}
          <div className="absolute bottom-0 w-full h-full">
            <YoutubePlayer youtubeSrc={videoData?.youtube_code} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
