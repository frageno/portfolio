'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";
import Image from 'next/image'

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { Spotlight } from './Spotlight'
import { VerticalSlider } from "../VerticalSlider";
import { techStack } from "@/data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  subtitle,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string;
  subtitle?: string | React.ReactNode;
  description?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "szymon.piatkowski27@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="h-full">
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName,
                 "object-cover object-center",
              )}
              width={600} 
              height={600} 
              priority 
            />
          )}
        </div>

        {id === 4 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `${(id === 1 || id === 2) && "group-hover/bento:translate-x-2 transition duration-200"} relative md:h-full flex flex-col px-5 p-5 lg:p-10 space-y-4`
          )}
        >
          <div className="font-bold md:text-xs lg:text-3xl text-sm text-white z-10">
            {subtitle}
          </div>
          <div
            className={`${(id === 1 || id === 3 || id === 4) && "font-primary text-lg lg:text-3xl !text-white !font-bold"} font-light text-slate-400 text-lg z-10`}
            dangerouslySetInnerHTML={{ __html: title || '' }}
          />
          {description && (
            <div className="text-base text-slate-400 max-w-3xl">
              {description}
            </div>
          )}

          {/* {id === 2 && (
            <a href="#kontakt">
              <MagicButton title="Skontaktuj się" position="right" />
            </a>
          )} */}

          {id === 3 && (
            <div className="w-full">
              {/* Desktop Grid */}
              <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl border border-white/[0.1] transition-all duration-300 hover:bg-slate-900/[0.8] hover:scale-105 group/tech">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-900/[0.8] rounded-lg border border-transparent transition-all duration-300 group-hover/tech:border-white/[0.1]">
                      <img src={tech.image} className="w-10 h-10 object-cover" alt={tech.alt} />
                    </div>
                    <div>
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Slider */}
              <div className="lg:hidden pt-4 md:pt-8">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={2}
                  spaceBetween={16}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 16
                    },
                  }}
                  className="w-full pb-10"
                >
                  {techStack.map((tech, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/[0.1] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-slate-900/[0.8] rounded-lg border border-transparent">
                          <img src={tech.image} className="w-10 h-10 object-cover" alt={tech.alt} />
                        </div>
                        <div>
                          <span>{tech.name}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email skopiowany!" : "Skopiuj mój email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />  
            </div>
          )}  
        </div>
      </div>
    </div>
  );
};