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
          <p className="text-slate-400 text-base text-center max-w-3xl mx-auto">Proces współpracy jest prosty i przejrzysty, tworzę projekt, wdrażam go, a następnie dopracowujemy szczegóły przed finalnym uruchomieniem. Dzięki temu masz pełną kontrolę nad efektem końcowym!</p>
        </div>

        <div className="relative px-8 lg:px-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        //   pagination={{ clickable: true }}
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
              <div className="w-full flex items-center justify-center rounded-3xl border border-white/[0.1]">
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50">
                  <div className="relative w-full h-[200px] lg:h-[400px] overflow-hidden rounded-t-3xl bg-[#13162d]">
                    <Image 
                      src={img} 
                      alt={title} 
                      width={500}
                      height={300}
                      className="w-full h-full object-cover relative"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#393bb2]/10 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 lg:p-8 space-y-2">
                    <h3 className="font-bold text-base lg:text-xl text-slate-100">
                      {title}
                    </h3>
                    <p className="text-sm lg:text-base text-slate-400 line-clamp-2">
                      {des}
                    </p>
                    <div className="flex items-center pt-4">
                      <a className="text-sm lg:text-base text-purple cursor-pointer">
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
        <div className="swiper-button-prev !-left-3 md:!-left-6 lg:!-left-8 !text-purple !w-8 !h-8">
            <FiChevronsLeft className="w-full h-full" />
        </div>
        <div className="swiper-button-next !-right-3 md:!-right-6 lg:!-right-8 !text-purple !w-8 !h-8"> 
            <FiChevronsRight className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default RecentProject