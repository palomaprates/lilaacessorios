import lilabanner from '../assets/bannerlila.png'

export default function Banner() {
    
  return (
    <div className="relative h-96 w-full">
      <img
        src={lilabanner}
        alt="Banner Lila"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black opacity-55" />
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-4">
        <h4 className="text-4xl font-pacifico">
          Mais que acessórios — histórias que tu carregas!
        </h4>
      </div>
    </div>
  );
}