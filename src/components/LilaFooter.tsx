import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function LocLila() {
  return (
    <div className="px-4 h-auto w-full flex grid-cols-3 items-center text-sm flex-col">
      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold -mb-0.5">Lojas</span>
        <a
          href="https://maps.app.goo.gl/Sx9qwgtAsunCUcm99"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 cursor-pointer hover:text-white"
        >
          <p>Arco do Terreirinho, Nº 1 Sintra</p>
          <FaLocationDot className="opacity-0 group-hover:opacity-100" />
        </a>
        <a
          href="https://maps.app.goo.gl/6X3hNPbbo5LAfZJ18"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 cursor-pointer hover:text-white"
        >
          <p>Arco do teixeira, N º2 (1ªandar) Sintra</p>
          <FaLocationDot className="opacity-0 group-hover:opacity-100" />
        </a>
        <a
          href="https://maps.app.goo.gl/FZxRpZWHkGRhtLsD8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 cursor-pointer hover:text-white"
        >
          <p>Rua 5 de Outubro, Nº 19, Ericeira, Mafra</p>
          <FaLocationDot className="opacity-0 group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
}

export default function LilaFooter() {
  return (
    <footer className="bg-[#5e95a0] flex gap-7 flex-col text-gray-200 pt-6 w-full items-center">
      <div className="grid grid-cols-3 max-w-[1300px] w-full">
        <LocLila />
        <div className="flex text-sm flex-col gap-1 items-center">
          <div className="flex gap-1 flex-col">
            <p className="text-base font-bold -mb-1">Contactos</p>
            <a
              href="https://www.instagram.com/lilaacessorios.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition flex items-center gap-1"
            >
              <FaInstagram />
              lilaacessorios.shop
            </a>
            <a
              href="https://www.facebook.com/lilaacessorios.shop/?locale=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition flex items-center gap-1"
            >
              <FaFacebook />
              lilaacessorios.shop
            </a>
            <a
              href="https://www.facebook.com/lilaacessorios.shop/?locale=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-900 transition flex items-center gap-1"
            >
              <FaWhatsapp />
              +351 920286832
            </a>
          </div>
        </div>
        <div className="flex text-sm flex-col items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-bold -mb-1">Info</p>
            <span className="hover:text-white cursor-pointer">Sobre Nós</span>
            <span className="hover:text-white cursor-pointer">Localização</span>
            <span className="hover:text-white cursor-pointer">Produtos</span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Lila Acessórios. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
