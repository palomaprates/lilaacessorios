// import anelsize from "../assets/anelsize.png";
import pulseiratartaruga from "../assets/pulseiratartaruga.png";
import stoantonio from "../assets/stoantonio.png";
import cabedal from "../assets/cabedal.png";
import pulseirasolho from "../assets/pulseirasolho.png";
import pulseirapeixe from "../assets/pulseirapeixe.png";
import colarconcha from "../assets/colarconcha.png";

export default function Products() {
  const products1 = [
    {
      image: cabedal,
      title: "cabedal",
    },
    {
      image: pulseiratartaruga,
      title: "Pulseira Tartaruga",
    },
  ];
  const products2 = [
    {
      image: pulseirapeixe,
      title: "Pulseira Peixe",
    },
    {
      image: pulseirasolho,
      title: "Pulseiras Olho",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-center gap-2">
        <img
          src={stoantonio}
          alt="Sto Antonio"
          className="w-1/2 h-full object-cover"
        />
        <div className="grid grid-cols-1 gap-2 justify-center md:grid-cols-2 md:flex md:flex-col">
          {products1.map((product, index) => (
            <div key={index} className="overflow-hidden w-80 h-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-6/5 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="grid grid-cols-1 gap-2 justify-center md:grid-cols-2 md:flex md:flex-col">
          {products2.map((product, index) => (
            <div key={index} className="overflow-hidden w-80 h-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-6/5 object-cover"
              />
            </div>
          ))}
        </div>
        <img
          src={colarconcha}
          alt="Colar Concha"
          className="w-1/2 h-full object-cover"
        />
      </div>
    </div>
  );
}
