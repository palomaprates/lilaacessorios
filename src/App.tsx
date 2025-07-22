import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/Products";
import LilaFooter from "./components/LilaFooter";
import SobreNos from "./components/SobreNos";
import InfosLila from "./components/InfosLila";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="flex-grow flex flex-col items-center">
        <Header />
        <Banner />
        <div className="max-w-[2000px] flex flex-col items-center">
          <div className="max-w-[1300px]">
            <InfosLila />
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5751090566646!2d-9.3903429!3d38.7963738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac01052f76d%3A0x5d52a53447ad1add!2sArco%20do%20Terreirinho%201%2C%202710-623%20Sintra!5e0!3m2!1spt-PT!2spt!4v1752921389932!5m2!1spt-PT!2spt"
              width="600"
              height="450"
              loading="lazy"
            ></iframe> */}
            <div id="produtos" className="flex gap-7 justify-center">
              <Products />
            </div>
            <div id="sobre" className="flex justify-center">
              <SobreNos />
            </div>
          </div>
        </div>
        <div id="contacto" className="h-20 w-full bg-[#93c3cd]"></div>
        <LilaFooter />
      </div>
    </div>
  );
}

export default App;
