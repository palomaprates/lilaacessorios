import anelsize from "../assets/anelsize.png";
import pulseiraolho from "../assets/pulseirasolho.png";
import stoantonio from "../assets/stoantonio.png";

export default function Products() {
  const products = [
    {
      image: anelsize,
      title: "Anel Size",
    },
    {
      image: pulseiraolho,
      title: "Pulseira Olho",
    },
  ];
  return (
    <div className="flex flex-row justify-center">
      <img
        src={stoantonio}
        alt="Sto Antonio"
        className="w-1/2 h-full object-cover"
      />
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:flex md:flex-col">
        {products.map((product, index) => (
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
  );
}
