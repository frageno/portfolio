'use client'
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const RecentProject = () => {
  return (
    <div id="projekty" className="space-y-12">
        <div className="space-y-6">
          <h2 className="heading">
            Sprawdz moje ostatnie projekty
          </h2>
          <p className="text-slate-400 text-base text-center max-w-3xl mx-auto">
            Sprawdź moje najnowsze projekty, w których łączę nowoczesny design z wydajnym kodem.
          </p>
        </div>

        <div className="relative px-4 lg:px-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          threshold={5}
          touchRatio={1.5}
          resistance={true}
          resistanceRatio={0.85}
          longSwipes={false}
          followFinger={true}
          grabCursor={true}
          watchSlidesProgress={true}
          preventInteractionOnTransition={true}
          slidesPerView={1}
          spaceBetween={16}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 24
            }
          }}
        >
          {projects.map(({ id, title, des, img, link }) => (
            <SwiperSlide key={id}>
              <div className="w-full flex items-center justify-center rounded-3xl px-2 md:px-0">
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 group/image">
                  <div className="relative w-full h-[200px] lg:h-[400px] overflow-hidden rounded-t-3xl bg-black-200">
                    {/* Light effect */}
                    <div className="absolute -left-20 -top-20 w-[200px] h-[200px] rounded-full bg-purple/10 md:blur-[100px] pointer-events-none" />
                    <div className="absolute -right-20 -bottom-20 w-[200px] h-[200px] rounded-full bg-purple/10 md:blur-[100px] pointer-events-none" />
                    <Image 
                      src={img} 
                      alt={title} 
                      width={500}
                      height={300}
                      className="w-full h-full object-cover relative md:transition-transform md:duration-700 md:group-hover/image:scale-110"
                      priority
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#393bb2]/10 to-transparent"></div> */}
                  </div>
                  
                  <div className="p-6 lg:p-8 space-y-2 border border-t-0 rounded-b-3xl border-white/[0.1]">
                    <div className="font-bold text-base lg:text-xl text-slate-100">
                      {title}
                    </div>
                    <p className="text-sm lg:text-base text-slate-400 line-clamp-3">
                      {des}
                    </p>
                    <div className="flex items-center pt-4">
                      <a href={link} target="_blank" className="text-sm lg:text-base text-purple cursor-pointer">
                        Zobacz stronę
                      </a>
                      <FaLocationArrow className="ms-3" color="#30AADD" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom arrows */}
        <div className="swiper-button-prev !-left-4 md:!-left-6 lg:!-left-8 !text-purple !w-8 !h-8">
            <FiChevronsLeft className="w-full h-full" />
        </div>
        <div className="swiper-button-next !-right-4 md:!-right-6 lg:!-right-8 !text-purple !w-8 !h-8"> 
            <FiChevronsRight className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default RecentProject