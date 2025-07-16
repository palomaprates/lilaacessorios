
import filigrana1 from '../assets/filigranalila.png'
import coracaoviana from '../assets/coracaovianalila.png'
import colarpeixeazul from '../assets/colarpeixeazul.png'
import joiaaco1 from '../assets/joiasacolila.png'
import joiaaco2 from '../assets/joiasacolila2.png'
import colarpeixe from '../assets/colarpeixe.png'
// import anelsize from '../assets/anelsize.png'
import pulseiraolho from '../assets/pulseirasolho.png'
import stoantonio from '../assets/stoantonio.png'
import colarconcha from '../assets/colarconcha.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type ProductData = {
    title: string;
    image: string[];
    description: string;
};

export default function SubProducts() {
  const products: ProductData[] = [
    {
      title: 'Filigrana',
      image: [coracaoviana, stoantonio, filigrana1],
      description: 'Filigrana.',
    },
    {
      title: 'Brincos',
      image: [joiaaco1, joiaaco2],
      description: 'Feitos à mão com aço inoxidável e amor.',
    },
    {
      title: 'Colares',
      image: [colarconcha, colarpeixe, colarpeixeazul],
      description: 'Colar Peixe',
    },
    {
      title: 'Pulseiras',
      image: [pulseiraolho],
      description: 'pulseira.',
    },
  ];

  return (
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 px-4 justify-center">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={5}
            slidesPerView={1}
            className="w-72 h-96"
          >
            {product.image.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Foto ${idx}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
