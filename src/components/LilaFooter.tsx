import { FaInstagram, FaFacebook} from 'react-icons/fa';

export default function LilaFooter() {
  return (
    <footer className=" text-white py-6 mt-12 opacity-50 w-full"  style={{backgroundColor: '#00A99D'}}>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Lila Acessórios. Todos os direitos reservados.</p>

        <div className="flex space-x-6 text-xl">
          <a href="https://www.instagram.com/lilaacessorios.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
           <FaInstagram /> 
          </a>
          <a href="https://www.facebook.com/lilaacessorios.shop/?locale=pt_PT" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
             <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}