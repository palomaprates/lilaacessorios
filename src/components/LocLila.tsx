import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export default function LocLila() {
  const carouselRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={(api) => {
        carouselRef.current = api;
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-30 justify-center pt-10 gap-10">
            <div className="flex flex-col text-center mx-6">
              <h1 className="flex items-center justify-center text-xl">
                Sintra (Lojas 1 e 2)
              </h1>
              <br></br>
              <p className="text-sm leading-relaxed flex items-center">
                Localizadas em Sintra, uma vila encantadora conhecida pelos seus
                palácios e atmosfera única que atrai visitantes do mundo
                inteiro, duas das nossas três lojas reúnem, junto com toda a
                magia do lugar, acessórios cheios de personalidade e significado
                — peças escolhidas a dedo para combinar com o charme e a energia
                especial de Sintra.
              </p>
            </div>
            <div className="flex justify-center mx-6 md:mx-0 items-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5751090566646!2d-9.3903429!3d38.7963738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac01052f76d%3A0x5d52a53447ad1add!2sArco%20do%20Terreirinho%201%2C%202710-623%20Sintra!5e0!3m2!1spt-PT!2spt!4v1752921389932!5m2!1spt-PT!2spt"
                width="450"
                height="350"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-30 justify-center pt-10 gap-10">
            <div className="flex flex-col text-center mx-6">
              <h1 className="flex items-center justify-center text-xl">
                Sintra (Lojas 1 e 2)
              </h1>
              <br></br>
              <p className="text-sm leading-relaxed flex items-center">
                Localizadas em Sintra, uma vila encantadora conhecida pelos seus
                palácios e atmosfera única que atrai visitantes do mundo
                inteiro, duas das nossas três lojas reúnem, junto com toda a
                magia do lugar, acessórios cheios de personalidade e significado
                — peças escolhidas a dedo para combinar com o charme e a energia
                especial de Sintra.
              </p>
            </div>
            <div className="flex justify-center mx-6 md:mx-0 items-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5589133818808!2d-9.390521799999982!3d38.79674500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac01bdc52b7%3A0x627aa41a42a5d2f!2sR.%20Arco%20do%20Teixeira%202%2C%202710-623%20Sintra!5e0!3m2!1spt-PT!2spt!4v1753368528064!5m2!1spt-PT!2spt"
                width="450"
                height="350"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-30 justify-center pt-10 gap-10">
            <div className="flex flex-col text-center mx-6">
              <h1 className="flex items-center justify-center text-xl">
                Ericeira
              </h1>
              <br></br>
              <p className="text-sm leading-relaxed flex items-center">
                Localizada na vibrante vila da Ericeira, famosa pelas suas
                praias de ondas perfeitas e pôr do sol inesquecível, a nossa
                terceira loja carrega o espírito leve e descontraído do mar.
                Entre o charme das ruas de calçada portuguesa e a brisa salgada
                do Atlântico, oferecemos acessórios que refletem o estilo de
                vida surfista, livre e autêntico que só a Ericeira tem — peças
                com a cara do verão o ano todo.
              </p>
            </div>
            <div className="flex justify-center mx-6 md:mx-0 items-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.2167860223203!2d-9.420090423988604!3d38.96471764272913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f270c0b121221%3A0xa483476e5b92a464!2sR.%205%20de%20Outubro%2019%2C%202655-255%20Ericeira!5e0!3m2!1spt-PT!2spt!4v1753697906833!5m2!1spt-PT!2spt"
                width="450"
                height="350"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
