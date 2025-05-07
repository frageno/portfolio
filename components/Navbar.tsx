"use client";
import React, { useState, useEffect, JSX } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/Navbar-menu";
import { cn } from "@/utils/cn";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const mobileVariants = {
  initial: { top: "6rem" },
  scrolled: { top: "1rem" }
};

const desktopVariants = {
  initial: { top: "8rem" },
  scrolled: { top: "2.5rem" }
};

export default function Navbar({ 
  className, 
  navItems 
}: { 
  className?: string,
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[]
}) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this state
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
      
      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.div
      variants={isMobile ? mobileVariants : desktopVariants}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      transition={{
        duration: 0.2
      }}
      className={cn(
        "fixed inset-x-0 w-full md:w-[fit-content] px-5 md:mx-auto z-[9999]",
        className
      )}
    >
      <Menu setActive={setActive} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
        {navItems.map((item) => (
          <MenuItem 
            key={item.name}
            setActive={setActive} 
            active={active} 
            item={item.name}
            link={item.link}
            onClick={handleMenuItemClick}
          />
        ))}
      </Menu>
    </motion.div>
  );
}
