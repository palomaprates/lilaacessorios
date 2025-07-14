type NavbarProps = {
  scrollToSobre: () => void;
  scrollToLocalizacao: () => void;
  scrollToProdutos: () => void;
};

export default function Navbar({ scrollToSobre, scrollToLocalizacao, scrollToProdutos }: NavbarProps) {
    const commonClasses =
    "cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105 active:scale-95 text-white hover:text-blacktext-lg leading-relaxed font-medium ";

  return (
    <nav className="w-full z-50 opacity-55" style={{ background: '#00A99D' }}>
      <div className="flex justify-center space-x-8 py-4 gap-40">
        <button onClick={scrollToSobre} className={commonClasses} >
          Sobre Nós
        </button>
        <button onClick={scrollToLocalizacao} className={commonClasses} >
          Localização
        </button>
        <button onClick={scrollToProdutos} className={commonClasses} >
          Produtos
        </button>
      </div>
    </nav>
  );
}

