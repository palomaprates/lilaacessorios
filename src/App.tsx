import './App.css'
import { useRef} from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Products from './components/Products'
import LilaFooter from './components/LilaFooter'
import SobreNos from './components/SobreNos'
import SubProducts from './components/SubProducts'
import InfosLila from './components/InfosLila'
import Navbar from './components/LilaMenu'
import Test from './components/LilaMenu'
// import SobreNos from './components/SobreNos'

// type ProductData = {
//   title: string;
//   image: string;
//   description: string;
// };

function App() {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

  // const handleOpenModal = (product: ProductData) => {
  //   setSelectedProduct(product);
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedProduct(null);
  // };

  const sobreRef = useRef<HTMLDivElement>(null);
  const localizacaoRef = useRef<HTMLDivElement>(null);
  const produtosRef = useRef<HTMLDivElement>(null);

  return (
    <div className='min-h-screen w-screen'>
      <div className='flex-grow'>
    <Header />
    <Banner />
      {/* <Navbar
        scrollToSobre={() => sobreRef.current?.scrollIntoView({ behavior: "smooth" })}
        scrollToLocalizacao={() => localizacaoRef.current?.scrollIntoView({ behavior: "smooth" })}
        scrollToProdutos={() => produtosRef.current?.scrollIntoView({ behavior: "smooth" })}
        /> */}
        <Test />
      <InfosLila />
    <div className='flex gap-7 justify-center'>
      <Products />
    </div>
        <div ref={sobreRef} className='flex justify-center'>
        <SobreNos/>
        </div>
        <SubProducts />
      <LilaFooter/>
    </div>
  </div>
  )
}

export default App
