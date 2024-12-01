"use client";

import PAGES from "@/constants/page";
import Link from "next/link";
import Nav from "./Nav";
import Player from "./Player";
import { useCallback, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const isHomePage = useMemo(() => pathname === PAGES.HOME, [pathname]);
  const isVisiblePlayer = useMemo(
    () => isHomePage || isMenuOpen,
    [isHomePage, isMenuOpen]
  );

  return (
    <header className="z-40">
      <div className="sticky top-0 left-0 w-full bg-black">
        <div className="w-full flex justify-between">
          <Link href={PAGES.HOME} className="font-bold p-5 text-white">
            Eunbin Galaxy ✦
          </Link>
          <Nav
            isOpen={isMenuOpen}
            handleOpen={openMenu}
            handleClose={closeMenu}
          />
        </div>
      </div>

      <Player isVisible={isVisiblePlayer} />
    </header>
  );
};

export default Header;
