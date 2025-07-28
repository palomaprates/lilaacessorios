import lilalogo from "../assets/lilalogo.png";
import LilaMenu from "./LilaMenu";

export default function Header() {
  const handleClickMenu = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-auto transition-all duration-300 px-4 py-2 grid grid-cols-3 md:grid-cols-[1fr_4fr]">
      <div className="md:hidden flex">
        <LilaMenu />
      </div>
      <div className="flex justify-center md:justify-start ml-4 w-16">
        <img
          src={lilalogo}
          alt="logo principal"
          className="object-contain h-16 w-auto"
        />
      </div>
      <div className="min-w-screen z-[60] items-center pr-32 flex justify-center text-black">
        <div className="max-w-[600px] mr-3 w-full justify-between hidden md:flex">
          <span
            onClick={() => handleClickMenu("produtos")}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Produtos
          </span>
          <span
            onClick={() => handleClickMenu("sobre")}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Sobre
          </span>
          <span
            onClick={() => handleClickMenu("localizacao")}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Localização
          </span>
          <span
            onClick={() => handleClickMenu("contacto")}
            className="hover:text-gray-500 cursor-pointer active:scale-95 transition-transform duration-200"
          >
            Contacto
          </span>
        </div>
      </div>
    </header>
  );
}
