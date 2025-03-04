import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Experience from "../components/Experience";
import Footer from "@/components/Footer";
import 'swiper/css';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <div className="relative flex justify-center items-center z-50 py-6">
        <a href="/" className="text-3xl md:text-6xl font-black">
          {"{Piatkowski"}<span className="text-purple">{".dev}"}</span>
        </a>
      </div>
      <Navbar navItems={navItems} />
      <div className="space-y-16 md:space-y-24 lg:space-y-32">
        <Hero />
        <Grid />
        <RecentProject />
        <div className="relative w-full space-y-12">
          <div className="h-screen w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
          <div className="relative space-y-6 z-10">
            <h2 className="heading">
                Jak wygląda współpraca?
            </h2>
            <p className="text-slate-400 text-base text-center max-w-3xl mx-auto">Proces współpracy jest prosty i przejrzysty – zaczynamy od rozmowy, ustalamy szczegóły, tworzę projekt, wdrażam go, a następnie dopracowujemy szczegóły przed finalnym uruchomieniem. Dzięki temu masz pełną kontrolę nad efektem końcowym!</p>
          </div>
          <div className="relative grid grid-cols-12 z-10">
            {/* First row - span 6 columns */}
            <div className="flex flex-col items-center justify-center text-center col-span-12 md:col-span-6 px-6 py-8 xl:p-12 space-y-4 border-y md:border-r md:border-t-0 border-b border-white/[0.1]">
              <div className="w-fit text-6xl bg-black-200 p-4 rounded-xl">01.</div>
              <div className="text-white text-2xl">Kontakt i analiza potrzeb</div>
              <p className="text-slate-400 text-base">Rozpoczynamy od rozmowy lub wypełnienia formularza, aby dokładnie zrozumieć Twoje potrzeby i cele projektu.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center col-span-12 md:col-span-6 px-6 py-8 xl:p-12 space-y-4 border-b border-white/[0.1]">
              <div className="w-fit text-6xl bg-black-200 p-4 rounded-xl">02.</div>
              <div className="text-white text-2xl">Wycena i ustalenia</div>
              <p className="text-slate-400 text-base">Na podstawie zebranych informacji przygotowuję szczegółową wycenę, ustalamy zakres prac, harmonogram oraz warunki współpracy.</p>
            </div>

            {/* Second row - span 4 columns each */}
            <div className="flex flex-col items-center justify-center text-center col-span-12 md:col-span-6 lg:col-span-4 px-6 py-8 xl:p-12 space-y-4 md:border-r border-white/[0.1] border-b lg:border-b-0 lg:border-r">
              <div className="w-fit text-6xl bg-black-200 p-4 rounded-xl">03.</div>
              <div className="text-white text-2xl">Projekt i development</div>
              <p className="text-slate-400 text-base">Tworzę projekt graficzny oraz wdrażam funkcjonalności, dbając o responsywność, wydajność i estetykę strony.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center col-span-12 md:col-span-6 lg:col-span-4 px-6 py-8 xl:p-12 space-y-4 border-b border-white/[0.1] lg:border-b-0 lg:border-r">
              <div className="w-fit text-6xl bg-black-200 p-4 rounded-xl">04.</div>
              <div className="text-white text-2xl">Testowanie i poprawki </div>
              <p className="text-slate-400 text-base">Przeprowadzam testy, sprawdzam poprawność działania i nanoszę ewentualne poprawki, aby wszystko działało zgodnie z oczekiwaniami.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center col-span-12 lg:col-span-4 px-6 py-8 xl:p-12 space-y-4 border-b border-white/[0.1] md:border-0">
              <div className="w-fit text-6xl bg-black-200  p-4 rounded-xl">05.</div>
              <div className="text-white text-2xl">Finalizacja i wdrożenie</div>
              <p className="text-slate-400 text-base">Uruchamiam stronę na docelowym serwerze oraz przeprowadzam krótkie szkolenie z jej obsługi, abyś mógł w pełni z niej korzystać.</p>
            </div>
          </div>
        </div>
        <Experience />
        <Footer />
      </div>
    </div>
  </main>
  );
}
