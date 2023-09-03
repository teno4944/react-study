import 'swiper/css';
import 'swiper/css/navigation';

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper styles

import { VideoModal } from '@/components/modal/VideoModal';

const baseApiUri = import.meta.env.VITE_BASE_API_URI; // .env 파일에 정의해둔 API URL

import type { VideoItemProps } from '@/models/video.model';

export const MainVideoSlider = () => {
  // modal비디오 팝업,,
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [videoData, setVideoData] = useState<VideoItemProps | null>(null);

  const handleVideoButtonClick = useCallback((item: VideoItemProps) => {
    openVideoModal();
    setVideoData(item);
  }, []);

  const openVideoModal = () => {
    setIsVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalVisible(false);
  };

  const [listItems, setListItems] = useState<VideoItemProps[]>([]);

  // API를 호출해서 받은 데이터를 setListItems(API데이터)로 설정한다
  const fetchListItems = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${baseApiUri}/replays/59`, {
        params: {
          page: 1,
          size: 5,
        },
      });

      setListItems(data.itemsList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchListItems();
    })();
  }, []);

  const slideOptions = {
    slidesPerView: 1,
    navigation: true,
  };

  if (isLoading) {
    return <div className="flex items-center justify-center text-white bg-black">로딩중입니다...</div>;
  }

  return (
    <>
      <Swiper
        {...slideOptions}
        modules={[Navigation]}
        className="mySwiper w-[1080px] h-[567px]"
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        // onSwiper={(swiper) => setSwiper(swiper)}
      >
        {listItems.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="relative bg-black w-[1080px] h-[567px]">
                {/* <YoutubePlayer youtubeSrc={item.youtube_code} /> */}
                <img src={item.image} alt="" />
                <div className="absolute bottom-0 left-0 px-[38px] py-[29px] bg-black/80 w-[100%] text-[rgb(220,220,220)] flex flex-col space-y-1">
                  <h3 className="font-bold text-[30px] line-clamp-2">{item.title}</h3>
                  {/* <span className="font-light text-[20px]">{item.description}</span> */}
                </div>
                <button
                  type="button"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  onClick={() => handleVideoButtonClick(item)}
                >
                  <img src="https://nstatic.jtbc.co.kr/jtbcplayer/1.0.4/images/bg_big_play.png" alt="" />
                </button>
              </div>
            </SwiperSlide>
          );
        })}

        <FiChevronLeft className="absolute top-0 bottom-0 left-0 z-10 mx-auto my-auto text-5xl text-white text-opacity-75 prev swiper-button-prev custom-prev" />

        <FiChevronRight className="absolute top-0 bottom-0 right-0 z-10 mx-auto my-auto text-5xl text-white text-opacity-75 custom-next" />
      </Swiper>
      {/* 메인비디오 모달 레이어 */}
      {videoData && <VideoModal videoData={videoData} isOpen={isVideoModalVisible} onClose={() => closeVideoModal()} />}
    </>
  );
};
