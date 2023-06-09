"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import CloseIcon from "../asset components/CloseIcon";
import BurgerIcon from "../asset components/BurgerIcon";
import ThreeSPIcon from "../asset components/ThreeSPIcon";
import EightEightIcon from "../asset components/EightEightIcon";
import "./navbar.scss";
import HomeIcon from "../asset components/HomeIcon";
import FileIcon from "../asset components/FileIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      showMenu();
    } else {
      setIsOpen(false);
      hideMenu();
    }
  };

  const showMenu = () => {
    const items = gsap.utils.toArray(".menuItem");
    const tl = gsap.timeline();
    items.forEach((item) => {
      tl.to(item, {
        x: "-0.75rem",
        duration: 0.1,
      });
    });
  };

  const hideMenu = () => {
    const items = gsap.utils.toArray(".menuItem");
    const tl = gsap.timeline();
    items.reverse().forEach((item) => {
      tl.to(item, {
        x: "-2.75rem",
        duration: 0.1,
      });
    });
  };

  return (
    <nav className="fixed left-3 top-7 z-50">
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </div>
      <ul className="menu">
        <li className="menuItem menuItem-1 ">
          <HomeIcon className="w-4 h-4 stroke-white absolute left-1" />
        </li>

        <li className="menuItem menuItem-2">
          <ThreeSPIcon className="w-4 h-4 fill-white absolute left-1" />
        </li>

        <li className="menuItem menuItem-3">
          <EightEightIcon className="w-4 h-4 fill-white absolute left-1" />
        </li>

        <li className="menuItem menuItem-4">
          <FileIcon className="w-4 h-4 stroke-white absolute left-1" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
