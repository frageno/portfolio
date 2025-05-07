"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { cn } from "@/utils/cn";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ 
  setActive, 
  active, 
  item, 
  link,
  onClick 
}: { 
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  link: string;
  onClick?: () => void;
}) => {
  return (
    <a
      href={link}
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      onClick={onClick}
      className={cn(
        "text-sm lg:text-base relative rounded-lg px-4 py-2",
        active === item ? "text-purple" : "text-slate-100"
      )}
    >
      {item}
    </a>
  );
};

export const Menu = ({
  setActive,
  children,
  isOpen,
  setIsOpen
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  // Add useEffect to handle body scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="relative">
      <button 
        className="md:hidden fixed left-1/2 -translate-x-1/2 z-50 p-2 rounded-xl bg-black-200/80 backdrop-blur-sm border border-white/[0.1]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose className="w-6 h-6 text-white" />
        ) : (
          <RxHamburgerMenu className="w-6 h-6 text-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black-100/95 backdrop-blur-md z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:flex items-center justify-center rounded-full bg-black-200 border border-white/[0.1] shadow-input px-4">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
