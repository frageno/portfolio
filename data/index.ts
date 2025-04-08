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
      title: `Cześć! Nazywam się Szymon i pomagam firmom zaistnieć w sieci, tworząc nowoczesne, responsywne strony internetowe oparte na Next.js, React i WordPress. Moje rozwiązania są szybkie, wydajne i dopasowane do Twoich celów biznesowych.
          <br /><br />
          Dbam o każdy detal – od projektu graficznego, przez optymalizację i kodowanie, aż po wdrożenie. Tworzę strony, które nie tylko świetnie wyglądają, ale także przyciągają klientów i zwiększają Twoją widoczność w sieci.
          <br /><br />
          Chcesz wyróżnić się online spośród konkurencji i przekuć stronę na realne korzyści? Skontaktuj się ze mną, i stworzmy razem coś wyjątkowego! 🚀`,
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
      des: "Nowoczesna, responsywna strona dla firmy z branży OZE. Skupia się na czytelnej prezentacji usług, intuicyjnej nawigacji i optymalizacji pod kątem wydajności, zapewniając lepszą widoczność w sieci.",
      img: "/project-2.png",
      link: "https://gamaoze.pl/",
    },
    {
      id: 2,
      title: "Solar Energy",
      des: "Nowoczesny szablon oparty na Elementorze, stworzony z myślą o branży OZE. Przejrzysty design, responsywność i łatwa edycja sprawiają, że idealnie nadaje się do promowania swoich usług.",
      img: "/project-1.png",
      link: "https://solarenergy.theme-genic.com/",
    },
    {
      id: 3,
      title: "ArchiNest",
      des: "Elegancki szablon Elementor stworzony dla branży architektonicznej. Minimalistyczny design, pełna responsywność i łatwa personalizacja sprawiają, że świetnie nadaje się do prezentacji projektów.",
      img: "/project-3.png",
      link: "https://archinest.theme-genic.com/",
    },
    {
      id: 4,
      title: "Cition",
      des: "Nowoczesny szablon Elementor idealny dla firm i startupów. Czysty design, intuicyjna nawigacja i pełna responsywność sprawiają, że świetnie nadaje się do profesjonalnej prezentacji usług.",
      img: "/project-4.png",
      link: "https://cition-template-kit.theme-genic.com/",
    },
    {
      id: 5,
      title: "SmartBiz",
      des: " Nowoczesny i responsywny szablon Elementor dla firm i startupów. Przejrzysty design, intuicyjna nawigacja i łatwa personalizacja sprawiają, że świetnie nadaje się do prezentacji usług biznesowych.",
      img: "/project-5.png",
      link: "https://smartbiz.theme-genic.com/",
    },
    {
      id: 5,
      title: "Medicare",
      des: "Profesjonalny szablon Elementor stworzony z myślą o branży medycznej. Czysty i nowoczesny design, intuicyjna nawigacja oraz pełna responsywność sprawiają, że idealnie nadaje się dla klinik i placówek medycznych.",
      img: "/project-6.png",
      link: "https://medicare.theme-genic.com/",
    },
    {
      id: 7,
      title: "UserVice",
      des: "Nowoczesny i funkcjonalny szablon Elementor dla firm usługowych. Przejrzysty design, łatwa edycja i pełna responsywność sprawiają, że świetnie nadaje się dla specjalistów z różnych branż.",
      img: "/project-7.png",
      link: "https://uservice.theme-genic.com/",
    },
    {
      id: 8,
      title: "Agency.",
      des: "Elegancki one-pager stworzony w Next.js dla nowoczesnych agencji. Szybkość, responsywność i nowoczesny design sprawiają, że idealnie nadaje się do prezentacji usług i portfolio.",
      img: "/project-8.png",
      link: "https://github.com/frageno/agency",
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
      desc: "Wsłuchuję się w potrzeby klienta, dostarczając rozwiązania idealnie dopasowane do wymagań i potrzeb klienta",
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