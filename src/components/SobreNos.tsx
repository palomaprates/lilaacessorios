import colarpeixeazul from "../assets/colarpeixeazul.png";
import coracaovianalila from "../assets/coracaovianalila.png";
import pulseiratartaruga from "../assets/pulseiratartaruga.png";

export default function SobreNos() {
  return (
    <section className="py-16 md:px-16 text-gray-800">
      <div className=" w-full flex gap-5 flex-col justify-center">
        <div className="flex justify-center flex-cols"></div>
        <div className="grid md:grid-cols-2 md:px-16 mx-10 md:gap-7 gap-1 shadow-md md:shadow-none">
          <img
            src={colarpeixeazul}
            alt="Colar Peixe Azul"
            className="w-120 h-120 object-cover"
          />
          <p className="text-xl leading-relaxed flex wrap-normal items-center">
            Na Lila Acessórios, cada peça é cuidadosamente feita à mão,
            garantindo exclusividade, beleza e significado.
          </p>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:px-16 mx-10 md:gap-7 gap-1 shadow-md md:shadow-none">
          <p className="text-xl leading-relaxed flex wrap-normal items-center">
            Os nossos produtos são resistentes à água, perfeitos para quem vive
            intensamente — seja na praia, piscina ou no dia-a-dia.
          </p>
          <img
            src={pulseiratartaruga}
            alt="Pulseira Tartaruga"
            className="w-120 h-120 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 md:px-16 mx-10 gap-1 md-gap-7 shadow-md md:shadow-none">
          <img
            src={coracaovianalila}
            alt="Colar Peixe Azul"
            className="w-120 h-120 object-cover"
          />
          <p className="text-xl leading-relaxed flex wrap-normal items-center">
            Também valorizamos as tradições portuguesas através da filigrana,
            uma arte milenar que transforma finos fios de ouro ou prata em obras
            delicadas e simbólicas. Esta técnica, com raízes profundas na
            cultura portuguesa, representa elegância e herança.
          </p>
        </div>
      </div>
    </section>
  );
}
