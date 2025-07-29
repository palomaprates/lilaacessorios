import anelsize from "../assets/anelsize.png";
import stoantonio from "../assets/stoantonio.png";
import cabedal from "../assets/cabedal.png";
import pulseirasolho from "../assets/pulseirasolho.png";
import pulseirapeixe from "../assets/pulseirapeixe.png";
import colarconcha from "../assets/colarconcha.png";

type Product = {
  image: string;
  title: string;
};

function ImagesGrid({
  products,
  mainImage,
  position,
}: {
  products: Product[];
  mainImage: string;
  position: "top" | "bottom";
}) {
  const mainImageClass =
    "sm:w-1/2 sm:h-full w-full max-sm:aspect-square object-cover";

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-2">
      {position === "top" && (
        <img src={mainImage} alt="main" className={mainImageClass} />
      )}
      <div className="grid grid-cols-1 gap-2 justify-center sm:flex sm:flex-col">
        {products.map((product, index) => (
          <div key={index} className="overflow-hidden sm:w-80 sm:h-100">
            <img
              src={product.image}
              alt={product.title}
              className="sm:w-full sm:h-full w-full max-sm:aspect-square object-cover"
            />
          </div>
        ))}
      </div>
      {position === "bottom" && (
        <img src={mainImage} alt="main" className={mainImageClass} />
      )}
    </div>
  );
}

export default function Products() {
  const products1 = [
    {
      image: cabedal,
      title: "cabedal",
    },
    {
      image: anelsize,
      title: "Anel Size",
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
      <ImagesGrid products={products1} mainImage={stoantonio} position="top" />
      <ImagesGrid
        products={products2}
        mainImage={colarconcha}
        position="bottom"
      />
    </div>
  );
}
