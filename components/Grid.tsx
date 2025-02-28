import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="o-mnie">
        <BentoGrid>
            {gridItems.map((item, index) => (
                <BentoGridItem
                    id={item.id}
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                />
            ))}

        </BentoGrid>
    </section>
  )
}

export default Grid