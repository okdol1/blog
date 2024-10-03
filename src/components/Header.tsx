import { useState } from "react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";
import { Link } from "react-router-dom";
import PAGES from "@/constants/page";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between">
      <button className="text-white font-bold p-5">Eunbin Galaxy ✦</button>
      <div>
        {!isMenuOpen && (
          <button
            className="p-5 text-white z-10"
            onClick={() => setIsMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </button>
        )}

        <div>
          <nav
            className={`fixed top-0 right-0 w-1/3 h-full bg-black bg-opacity-80 transform transition-transform
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <button
              className="fixed top-0 right-0 p-5 text-white"
              onClick={() => setIsMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <CloseIcon />
            </button>

            <ul className="h-full flex flex-col justify-center items-center gap-y-4">
              <li>
                <Link to={PAGES.PAGE_HOME} className="text-white p-5">
                  Home
                </Link>
              </li>
              <li>
                <Link to={PAGES.PAGE_ABOUT_ME} className="text-white p-5">
                  About Me
                </Link>
              </li>
              <li>
                <Link to={PAGES.PAGE_BLOG} className="text-white p-5">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={PAGES.PAGE_PROJECTS} className="text-white p-5">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
