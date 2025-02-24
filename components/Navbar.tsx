"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/Navbar-menu";
import { cn } from "@/utils/cn";


export default function Navbar({ className, navItems }: 
    {   className?: string,  
        navItems: {
            name: string;
            link: string;
            icon?: JSX.Element;
          }[]
    }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-[fit-content] mx-5 md:mx-auto z-[9999]", className)}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <MenuItem 
            key={item.name}
            setActive={setActive} 
            active={active} 
            item={item.name}
            link={item.link}
          />
        ))}
      </Menu>
    </div>
  );
}
