import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="w-full">
        <h2 className="heading">
            Dlaczego warto <span className="text-purple"> wybrać mnie?</span>
        </h2>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
            {workExperience.map((card) => (
                <Button 
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    classNames="flex-1 text-white border-neutral-200 dark:border-white/[0.1]">
                    <div className="flex lg:flex-row flex-col lg:items-center p-6 md:p-8 xl:p-12 gap-2">
                        <div className="text-4xl md:text-5xl mb-4 lg:mb-0">
                            {card.icon}
                        </div>
                        <div className="lg:ms-5">
                            <h3 className="text-center lg:text-start text-xl md:text-2xl font-bold">
                                {card.title}
                            </h3>
                            <p className="text-center lg:text-start text-slate-400 mt-3 font-medium">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience