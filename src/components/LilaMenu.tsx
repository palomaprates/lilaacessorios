import { IoMenu } from "react-icons/io5";
import lilalogo from "../assets/lilalogo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function LilaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const commonClasses =
    "cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105 active:scale-95 text-black hover:text-blacktext-lg leading-relaxed font-medium";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <IoMenu className="ml-4 flex justify-center cursor-pointer group-hover:text-black transition-colors duration-300 w-6 h-6 text-black" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            {" "}
            <div className="flex justify-center">
              <img
                src={lilalogo}
                alt="logo principal"
                className="h-18 w-auto"
              />
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex-col flex justify-center gap-10 mt-10">
              <button
                onClick={() => {
                  handleClick("produtos");
                }}
                className={commonClasses}
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  handleClick("sobre");
                }}
                className={commonClasses}
              >
                Sobre Nós
              </button>
              <button
                onClick={() => {
                  handleClick("localizacao");
                }}
                className={commonClasses}
              >
                Localização
              </button>
              <button
                onClick={() => {
                  handleClick("contacto");
                }}
                className={commonClasses}
              >
                Contacto
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
