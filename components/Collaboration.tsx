'use client'
import React from 'react'

const collaborationSteps = [
  {
    id: "01",
    title: "Kontakt i analiza potrzeb",
    description: "Rozpoczynamy od rozmowy lub wypełnienia formularza, aby dokładnie zrozumieć Twoje potrzeby i cele projektu."
  },
  {
    id: "02",
    title: "Wycena i ustalenia",
    description: "Na podstawie zebranych informacji przygotowuję szczegółową wycenę, ustalamy zakres prac, harmonogram oraz warunki współpracy."
  },
  {
    id: "03",
    title: "Projekt i development",
    description: "Tworzę projekt graficzny oraz wdrażam funkcjonalności, dbając o responsywność, wydajność i estetykę strony."
  },
  {
    id: "04",
    title: "Testowanie i poprawki",
    description: "Przeprowadzam testy, sprawdzam poprawność działania i nanoszę ewentualne poprawki, aby wszystko działało zgodnie z oczekiwaniami."
  },
  {
    id: "05",
    title: "Finalizacja i wdrożenie",
    description: "Uruchamiam stronę na docelowym serwerze oraz przeprowadzam krótkie szkolenie z jej obsługi, abyś mógł w pełni z niej korzystać."
  }
]

const Collaboration = () => {
  return (
    <div id="wspolpraca" className="relative w-full space-y-12">
      <div className="h-screen w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="relative space-y-6 z-10">
        <h2 className="heading">
          Jak wygląda współpraca?
        </h2>
        <p className="text-slate-400 text-base text-center max-w-3xl mx-auto">
          Proces współpracy jest prosty i przejrzysty – zaczynamy od rozmowy, ustalamy szczegóły, tworzę projekt, wdrażam go, a następnie dopracowujemy szczegóły przed finalnym uruchomieniem. Dzięki temu masz pełną kontrolę nad efektem końcowym!
        </p>
      </div>
      <div className="relative grid grid-cols-12 z-10">
        {collaborationSteps.map((step, index) => (
          <div 
            key={step.id}
            className={`flex flex-col items-center justify-center text-center col-span-12 
              ${index < 2 ? 'md:col-span-6' : 'md:col-span-6 lg:col-span-4'}
              px-6 py-8 xl:p-12 space-y-4
              ${index === 0 ? 'border-y md:border-r md:border-t-0' : ''}
              ${index === 1 ? '' : ''}
              ${index === 2 ? 'md:border-r lg:border-b-0' : ''}
              ${index === 3 ? 'lg:border-r lg:border-b-0' : ''}
              ${index === 4 ? 'md:border-0 !col-span-12 lg:!col-span-4' : ''}
              border-b border-white/[0.1]`}
          >
            <div className="w-fit text-6xl bg-black-200 p-4 rounded-xl">{step.id}</div>
            <div className="text-white text-2xl">{step.title}</div>
            <p className="text-slate-400 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collaboration