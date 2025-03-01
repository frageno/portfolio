'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";
import Image from 'next/image'

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { VerticalSlider } from "../VerticalSlider";

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
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Wordpress", "Typescript", "PHP", "Javascript", "VueJS", "NextJS", "TailwindCSS", "SASS"];
  const rightLists = ["VueJS", "NextJS", "TailwindCSS", "SASS", "ReactJS", "Wordpress", "Typescript", "PHP", "Javascript"];

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
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className={`${id === 5 && "hidden md:block"} w-full h-full absolute`}>
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
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10 space-y-4"
          )}
        >
          <div className="font-sans font-semibold md:text-xs lg:text-base text-sm text-purple z-10">
            {subtitle}
          </div>
          <div
            className={`${id === 1 && "font-sans text-lg lg:text-3xl !font-bold"} font-light text-slate-200 text-lg z-10`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {id === 2 && (
            <a href="#kontakt">
              <MagicButton title="Skontaktuj się" position="right" />
            </a>
          )}

          {id === 3 && (
              <VerticalSlider leftLists={leftLists} rightLists={rightLists} />
          )}
          {id === 6 && (
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