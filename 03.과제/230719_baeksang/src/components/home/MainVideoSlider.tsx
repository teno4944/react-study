import axios from 'axios';
const baseApiUri = import.meta.env.VITE_BASE_API_URI; // .env 파일에 정의해둔 API URL

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react';
import { VideoModal } from '@/components/modal/videoModal';
import type { VideoItemProps } from '@/models/video.model';

export const MainVideoSlider = () => {
  // modal비디오 팝업,,
  const [isVideoModalVisible, setisVideoModalVisible] = useState(false);
  const [videoData, setVideoData] = useState<VideoItemProps | null>(null);

  const handleVideoButtonClick = useCallback((open: boolean, item: VideoItemProps) => {
    setisVideoModalVisible(open);
    setVideoData(item);
  }, []);

  const [listItems, setListItems] = useState([]);

  // API를 호출해서 받은 데이터를 setListItems(API데이터)로 설정한다
  const fetchListItems = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseApiUri}/replays/59`, {
        params: {
          page: 1,
          size: 5,
        },
      });
      console.log(data.itemsList);
      console.log('성공적으로 불러옴');

      setListItems(data.itemsList);
    } catch (err) {
      console.log('에러');
      console.log(err);
    } finally {
      console.log('후보자 데이터를 불러왔거나 불러오지 못했거나 아무튼 끝났다');
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
                  onClick={() => handleVideoButtonClick(true, item)}
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
      <VideoModal
        videoData={videoData}
        isOpen={isVideoModalVisible}
        onClose={() => handleVideoButtonClick(false, null)}
      />
    </>
  );
};
