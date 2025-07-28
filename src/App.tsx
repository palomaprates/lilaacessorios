import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/Products";
import LilaFooter from "./components/LilaFooter";
import SobreNos from "./components/SobreNos";
import InfosLila from "./components/InfosLila";
import LocLila from "./components/LocLila";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex justify-center">
      <div className="flex-grow flex flex-col items-center">
        <Header />
        <Banner />
        <div className="md:max-w-[2000px] max-w-screen flex flex-col items-center">
          <div className="md:max-w-[1300px] max-w-screen">
            <InfosLila />
            <div id="produtos" className="flex gap-7 justify-center">
              <Products />
            </div>
            <div id="localizacao" className="flex justify-center">
              <LocLila />
            </div>
            <div id="sobre" className="flex justify-center">
              <SobreNos />
            </div>
          </div>
          <div
            id="contacto"
            className="h-20 w-full bg-[#93c3cd] flex flex-col pt-3"
          >
            <p
              className="flex justify-center text-xl font-pacifico"
              style={{ color: "#00A99D" }}
            >
              lila
            </p>
            <p className="flex justify-center text-xl font-medium text-white ">
              Mais do que acessórios, oferecemos autenticidade e histórias que
              tu carregas contigo.
            </p>
          </div>
          <LilaFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
