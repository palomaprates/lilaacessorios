import { CiFaceSmile } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

function InfosLilaMobile() {
  const carouselRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 3000);

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
          <div className="flex-col p-7 flex items-center gap-3 text-center h-full w-auto">
            <CiFaceSmile className="h-7 w-auto" style={{ color: "#00A99D" }} />
            <p>
              Atendimento
              <br /> personalizado ao cliente
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex-col p-7 flex items-center gap-3 text-center h-full w-auto">
            <CiHeart className="h-7 w-auto" style={{ color: "#00A99D" }} />
            <p>
              Jóias feitas <br />à mão com amor
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex-col p-7 flex items-center gap-3 text-center h-full w-auto">
            <IoDiamondOutline
              className="h-7 w-auto"
              style={{ color: "#00A99D" }}
            />
            <p>
              Tradição <br />
              Portuguesa
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex-col p-7 flex items-center gap-3 text-center h-full w-auto">
            <MdOutlinePlace
              className="h-7 w-auto"
              style={{ color: "#00A99D" }}
            />
            <p>
              Lojas em <br />
              Sintra e Ericeira
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default function InfosLila() {
  return (
    <div className="flex-row mt-7">
      <div className="md:grid md:grid-cols-4 hidden">
        <div className="flex-col p-7 flex items-center gap-3 text-center">
          <CiFaceSmile className="h-10 w-auto" style={{ color: "#00A99D" }} />
          <p>
            Atendimento
            <br /> personalizado ao cliente
          </p>
        </div>
        <div className="flex-col p-7 flex items-center gap-3 text-center">
          <CiHeart className="h-10 w-auto" style={{ color: "#00A99D" }} />
          <p>
            Jóias feitas <br />à mão com amor
          </p>
        </div>
        <div className="flex-col p-7 flex items-center gap-3 text-center">
          <IoDiamondOutline
            className="h-10 w-auto"
            style={{ color: "#00A99D" }}
          />
          <p>
            Tradição <br />
            Portuguesa
          </p>
        </div>
        <div className="flex-col p-7 flex items-center gap-3 text-center">
          <MdOutlinePlace
            className="h-10 w-auto"
            style={{ color: "#00A99D" }}
          />
          <p>
            Lojas em <br />
            Sintra e Ericeira
          </p>
        </div>
      </div>
      <div className="flex md:hidden">
        <InfosLilaMobile />
      </div>
    </div>
  );
}
