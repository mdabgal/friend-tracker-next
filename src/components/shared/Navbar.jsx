"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoImg from "../../assets/logo.png";

import { Home, Clock,  Menu, X, ChartLine } from "lucide-react";
import MyLink from "./MyLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home", icon: <Home size={18} /> },
    { path: "/timeline", text: "Timeline", icon: <Clock size={18} /> },
    { path: "/stats", text: "Stats", icon: <ChartLine size={18} /> },
  ];

  return (
    <nav className="shadow bg-white">
      <div className="flex justify-between items-center py-3 px-4 container mx-auto">

       
        <Image src={logoImg} alt="logo" className="w-[130px]" />

       
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <MyLink key={index} href={item.path}>
              <span className="flex items-center gap-1">
                {item.icon}
                {item.text}
              </span>
            </MyLink>
          ))}
        </ul>

       
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <MyLink
                key={index}
                href={item.path}
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.text}
                </span>
              </MyLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;