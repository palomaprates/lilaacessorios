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

export default function LilaMenu() {
  const commonClasses =
    "cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105 active:scale-95 text-black hover:text-blacktext-lg leading-relaxed font-medium";

  return (
    <Sheet>
      <SheetTrigger>
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
                  const section = document.getElementById("produtos");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className={commonClasses}
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("sobre");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className={commonClasses}
              >
                Sobre Nós
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("localizacao");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className={commonClasses}
              >
                Localização
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("contacto");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
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
