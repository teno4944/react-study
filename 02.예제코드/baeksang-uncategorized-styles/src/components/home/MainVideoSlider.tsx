import { YoutubePlayer } from '@/components';

import { mainVideos } from '@/mocks/mainVideos';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Swiper Slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperOptions } from 'swiper/types';

import { Navigation } from 'swiper/modules';

export const MainVideoSlider = () => {
  const sliderOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    style: {
      width: '1008px',
      height: '567px',
    },
    navigation: true,
    modules: [Navigation],
  };

  return (
    <Swiper {...sliderOptions}>
      {mainVideos.map((item) => {
        return (
          <SwiperSlide
            key={item.youtubeCode}
            style={{
              width: '1008px',
              height: '567px',
            }}
          >
            <div className="relative w-full h-full bg-black">
              <YoutubePlayer youtubeSrc={item.youtubeCode} />
              <div className="absolute bottom-0 left-0 px-[38px] py-[29px] w-full bg-black/80 text-[rgb(220,220,220)] flex flex-col space-y-1">
                <h4 className="text-[30px] line-clamp-2">{item.title}</h4>
                <p className="text-[20px]">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    // <FiChevronLeft className="text-5xl text-white text-opacity-75" />
    // <FiChevronRight className="text-5xl text-white text-opacity-75" />
  );
};
