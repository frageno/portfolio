import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
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
        <Experience />
        <Footer />
      </div>
    </div>
  </main>
  );
}
