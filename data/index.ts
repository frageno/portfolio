import { Iceberg } from "next/font/google";

export const navItems = [
    { name: "O mnie", link: "#o-mnie" },
    { name: "Projekty", link: "#projekty" },
    { name: "Współpraca", link: "#wspolpraca" },
    { name: "Kontakt", link: "#kontakt" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Dążę do perfekcji w szczegółach – <br /> od kodu po końcowy design 🎯",
      className: "lg:col-span-6 col-span-12 min-h-[40vh] lg:h-auto",
      imgClassName: "w-full h-full",
      titleClassName: "h-full justify-end",
      img: "/about-img.jpg",
    },
    {
      id: 2,
      title: `Cześć! Nazywam się Szymon i tworzę nowoczesne, responsywne strony internetowe oparte na technologiach takich jak Next.js, React i WordPress. Stawiam na dedykowane rozwiązania, które są szybkie, wydajne i dopasowane do indywidualnych potrzeb klienta.
              <br /><br />
              Dbam o jakość kodu, optymalizację oraz intuicyjność stron, a cały proces realizacji – od projektu graficznego, przez kodowanie, aż po wdrożenie – przebiega w sposób przejrzysty i sprawny.
              <br /><br />
              Jeśli szukasz osoby, która stworzy stronę od A do Z i zadba o każdy detal – zapraszam do kontaktu! 🚀`,
      subtitle: "Kilka słów o mnie 👨‍💻",
      className: "lg:col-span-6 col-span-12",
      titleClassName: "justify-start",
    },
    {
      id: 3,
      title: "Technologie, w których pracuję 💻",
      description: 'Pracuję z nowoczesnymi technologiami, takimi jak JavaScript, React, Next.js, Tailwind CSS, SCSS, PHP i WordPress, tworząc funkcjonalne i estetyczne strony oraz aplikacje internetowe.',
      className: "xl:col-span-8 col-span-12 md:row-span-2",
      titleClassName: "justify-center",
    },
    {
      id: 4,
      title: "Gotowy na wspólną realizację projektu?",
      className: "xl:col-span-4 col-span-12 lg:row-span-2",
      titleClassName: "justify-center md:max-w-full text-center",
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Gama OZE",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/project-1.png",
      link: "https://gamaoze.pl/",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/project-1.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/project-3.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/project-3.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "5 lat doświadczenia w branży",
      icon: "👨‍💻",
      desc: "Tworzę nowoczesne, funkcjonalne strony i aplikacje internetowe, korzystając z zaawansowanych technologii takich jak React, Vue czy Next.js ale również Wordpress",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Twoje cele są moim priorytetem",
      icon: "🤝",
      desc: "Wsłuchuję się w potrzeby klienta, dostarczając rozwiązania idealnie dopasowane do wymagań i potrzeb klienta.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Od projektu po wdrożenie",
      icon: "🛠️",
      desc: "Zajmuję się całym procesem tworzenia stron – od koncepcji i designu, przez programowanie, aż po optymalizację i wdrożenie. Możesz liczyć na pełne wsparcie na każdym etapie",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Wydajne i szybkie rozwiązania",
      icon: "🚀",
      desc: "Tworzę strony zoptymalizowane pod kątem wydajności i SEO, które działają płynnie na każdym urządzeniu. Skupiam się na maksymalizacji funkcjonalności i szybkości działania",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      url: 'https://github.com/frageno',
      img: "/git.svg",
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/in/szymon-piatkowski/',
      img: "/link.svg",
    },
  ];

  export const techStack = [
    {
      image: '/wp-logo.png',
      name: 'Wordpress',
      alt: 'Wordpress logo'
    },
    {
      image: '/js-logo.png',
      name: 'Javascript',
      alt: 'Javascript logo'
    },
    {
      image: '/ts-logo.png',
      name: 'Typescript',
      alt: 'Typescript logo'
    },
    {
      image: '/react-logo.png',
      name: 'React',
      alt: 'React logo'
    },
    {
      image: '/next-logo.png',
      name: 'Next.js',
      alt: 'Next.js logo'
    },
    {
      image: '/php-logo.png',
      name: 'PHP',
      alt: 'PHP logo'
    },
    {
      image: '/sass-logo.png',
      name: 'SCSS',
      alt: 'SCSS logo'
    },
    {
      image: '/tailwind-logo.png',
      name: 'Tailwind',
      alt: 'Tailwind logo'
    }
  ];