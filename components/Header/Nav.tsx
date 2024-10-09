"use client";

import { useState } from "react";
import MenuIcon from "@/assets/icons/menu.svg";
import CloseIcon from "@/assets/icons/close.svg";
import Link from "next/link";
import PAGES from "@/constants/page";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {!isMenuOpen && (
        <button
          className="p-5"
          onClick={() => setIsMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <MenuIcon />
        </button>
      )}

      <nav
        className={`z-50 fixed top-0 right-0 w-full h-full bg-black bg-opacity-80 transform transition-transform
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <button
          className="fixed top-0 right-0 p-5"
          onClick={closeMenu}
          aria-label="메뉴 닫기"
        >
          <CloseIcon />
        </button>

        <ul className="h-full flex flex-col justify-center items-center gap-y-4">
          <li>
            <Link href={PAGES.HOME} onClick={closeMenu} className="p-5">
              Home
            </Link>
          </li>
          <li>
            <Link href={PAGES.ABOUT_ME} onClick={closeMenu} className="p-5">
              About Me
            </Link>
          </li>
          <li>
            <Link href={PAGES.BLOG} onClick={closeMenu} className="p-5">
              Blog
            </Link>
          </li>
          <li>
            <Link href={PAGES.PROJECTS} onClick={closeMenu} className="p-5">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
