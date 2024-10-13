import PAGES from "@/constants/page";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between bg-black">
      <Link href={PAGES.HOME} className="font-bold p-5 text-white">
        Eunbin Galaxy ✦
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
