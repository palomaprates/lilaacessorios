import lilalogo from '../assets/lilalogo.png'
import { useEffect, useState } from "react";
import { cn } from '../utils';

export default function Header()
{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

  <header
      className={cn(`group cursor-pointer fixed top-0 left-0 w-full z-50 h-auto transition-all duration-300`,
        isScrolled ? 'bg-white shadow-md' : 'hover:bg-white hover:shadow-md bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center px-4 relative flex-col">
                    <img src={lilalogo} 
                    alt= "logo principal"
                    className='h-24 w-auto'/>
                            </div>
        </header>
    )
}