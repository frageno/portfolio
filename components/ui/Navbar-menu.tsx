"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  link: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative"
        onMouseEnter={() => setActive(item)}
    >
      <Link href={link}>
        <motion.span
          transition={{ duration: 0.3 }}
          className={`cursor-pointer text-base font-semibold transition-colors duration-300 ${
            active === item ? 'text-purple' : 'text-black dark:text-white'
          }`}
        >
          {item}
        </motion.span>
      </Link>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Mobile Menu Button with background */}
      <button 
        className={`md:hidden fixed left-1/2 -translate-x-1/2 z-50 p-2 rounded-xl transition-all duration-300
          ${isOpen ? 'bg-transparent' : 'bg-black-200 backdrop-blur-sm'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose className="w-6 h-6 text-white" />
        ) : (
          <RxHamburgerMenu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black-100/95 backdrop-blur-md z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div
        onMouseLeave={() => setActive(null)}
        className="hidden md:flex relative rounded-full border border-transparent dark:border-white/[0.1] shadow-input justify-center space-x-4 px-8 md:px-16 lg:px-32 py-6"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
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
