import Image from 'next/image' // Add this import
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full py-20 pb-10 relative" id="contact"> {/* Add relative */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <Image 
              src="/footer-grid.svg" 
              alt="grid" 
              className="w-full h-full opacity-50"
              width={1920}  // Add appropriate width
              height={1080} // Add appropriate height
              priority
            />
        </div>
        <div className="flex flex-col items-center">
            <span className="heading !leading-[1.2] lg:w-[45vw]">
              Nie czekaj – wynieś <span className="text-purple">swoją stronę</span><br /> na nowy poziom już teraz!
            </span>
            <p className="text-white-200 md:mt-10 my-5 text-center">Skontaktuj się ze mną już dzisiaj!</p>
            <a href="mailto:szymon.piatkowski27@gmail.com">
                <MagicButton title="Napisz do mnie" icon={<FaLocationArrow />} position="right" />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
            <p className="md:text-base text-small md:font-normal font-light">Copyright 2025 Simon</p>
               <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                <Image 
                  src={info.img} 
                  alt="social media icon" 
                  width={20} 
                  height={20} 
                />
                </div>
            ))}
            </div>  
        </div>
    </footer>
  )
}

export default Footer