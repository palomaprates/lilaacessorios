// type NavbarProps = {
//   scrollToSobre: () => void;
//   scrollToLocalizacao: () => void;
//   scrollToProdutos: () => void;
// };

// export default function Navbar({ scrollToSobre, scrollToLocalizacao, scrollToProdutos }: NavbarProps) {
//     const commonClasses =
//     "cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105 active:scale-95 text-white hover:text-blacktext-lg leading-relaxed font-medium ";

//   return (
//     <nav className="w-full z-50 opacity-55" style={{ background: '#00A99D' }}>
//       <div className="flex justify-center space-x-8 py-4 gap-40">
//         <button onClick={scrollToSobre} className={commonClasses} >
//           Sobre Nós
//         </button>
//         <button onClick={scrollToLocalizacao} className={commonClasses} >
//           Localização
//         </button>
//         <button onClick={scrollToProdutos} className={commonClasses} >
//           Produtos
//         </button>
//       </div>
//     </nav>
//   );
// }
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";

export default function LilaMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // muda quando rolar mais de 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<Sheet>
  <SheetTrigger> <IoMenu className={`transition-colors duration-300 w-6 h-6 ${
        scrolled ? 'text-black' : 'text-white'
      }`}/> </SheetTrigger>
  <SheetContent side="left" className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  );
}
