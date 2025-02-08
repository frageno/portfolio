import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'

const RecentProject = () => {
  return (
    <div id="projects" className="py-20">
        <h1 className="heading">
            Sprawdz moje { '' }
            <span className="text-purple">ostatnie projekty!</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-20 md:gap-y-2 lg:gap-y-8 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="h-[32rem] sm:h-[41rem] md:h-[36rem] lg:h-[39rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10">
                        <div className="relative w-full h-full overflow-hidden lg:rounded-2xl bg-[#13162d]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#393bb2]/10 to-transparent"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,59,178,0.1),transparent_50%)]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#393bb2]/5 via-transparent to-black/50"></div>
                                <Image 
                                src={img} 
                                alt={title} 
                                width={500}
                                height={300}
                                className="w-[90%] h-[90%] object-contain relative z-10"
                                priority
                                />
                            </div>
                            </div>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={index} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center" 
                                      style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                      }}>
                                        <Image 
                                            src={icon} 
                                            alt={`Technology ${index + 1}`} 
                                            width={24}
                                            height={24}
                                            className="p-2"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                    Check Live Site
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject