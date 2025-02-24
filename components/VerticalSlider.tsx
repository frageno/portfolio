import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface VerticalSliderProps {
  leftLists: string[];
  rightLists: string[];
}

export const VerticalSlider = ({ leftLists, rightLists }: VerticalSliderProps) => {
  return (
    <div className="flex gap-1 lg:gap-5 w-fit absolute right-5 lg:right-10 h-full">
      <div className="w-full h-full">
        <Swiper
          direction="vertical"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          centeredSlides={true}
          slidesPerView={3.7}
          spaceBetween={12}
          className="h-full"
        >
          {leftLists.map((item, i) => (
            <SwiperSlide key={i}>
              <span className="lg:py-4 py-2 px-3 lg:px-10 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-[#10132E] block">
                {item}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* <div className="w-1/2">
        <Swiper
          direction="vertical"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          loop={true}
          speed={800}
          slidesPerView={4}
          className="h-full"
        >
          {rightLists.map((item, i) => (
            <SwiperSlide key={i}>
              <span className="lg:py-4 py-2 px-3 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-[#10132E] block">
                {item}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};