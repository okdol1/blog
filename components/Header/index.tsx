"use client";

import PAGES from "@/constants/page";
import Link from "next/link";
import Nav from "./Nav";
import Player from "./Player";
import { useCallback, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between bg-black">
        <Link href={PAGES.HOME} className="font-bold p-5 text-white">
          Eunbin Galaxy ✦
        </Link>
        <Nav
          isOpen={isMenuOpen}
          handleOpen={openMenu}
          handleClose={closeMenu}
        />
      </header>

      <Player isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
