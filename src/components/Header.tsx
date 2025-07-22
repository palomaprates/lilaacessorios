import lilalogo from "../assets/lilalogo.png";
import { useEffect, useState } from "react";
import { cn } from "../utils";
import LilaMenu from "./LilaMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-auto transition-all duration-300 px-4 py-2 grid grid-cols-3 md:grid-cols-[1fr_3fr]">
      <div className="md:hidden flex">
        <LilaMenu />
      </div>
      <div className="flex justify-center md:justify-start ml-10">
        <img
          src={lilalogo}
          alt="logo principal"
          className="object-contain h-16 w-auto"
        />
      </div>
      <div className="pb-4 w-full z-[60] items-center flex justify-center text-black">
        <div className="max-w-[600px] mr-3 w-full justify-between hidden md:flex">
          <span
            onClick={() => {
              const section = document.getElementById("produtos");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Produtos
          </span>
          <span
            onClick={() => {
              const section = document.getElementById("sobre");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Sobre
          </span>
          <span
            onClick={() => {
              const section = document.getElementById("localizacao");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Localização
          </span>
          <span
            onClick={() => {
              const section = document.getElementById("contacto");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Contacto
          </span>
        </div>
      </div>
    </header>
  );
}
