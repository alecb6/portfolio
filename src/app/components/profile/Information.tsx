export default function Information() {
  return (
    <div className="items-center justify-items-center min-h-screen relative overflow-hidden mt-12">
      <h1 className="text-7xl">
        <span className="flex flex-row items-center gap-4 mb-8">
          Hola
          <div className=" animate-bouncing repeat-infinite">!</div>
        </span>
      </h1>
      <div className="relative w-[100%] md:w-[600px] h-[320px] rounded-lg flex flex-col items-center justify-center p-4">
        <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white w-8 h-8 animate-pulsing repeat-infinite"></div>
        <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white w-8 h-8 animate-pulsing repeat-infinite"></div>
        <span className="text-2xl">Mi nombre es Alex</span>
        <h2 className="font-thin text-clip text-base">
          Soy un <span className="font-bold"> desarrollador web </span>{" "}
          apasionado por crear soluciones digitales
          <span className="font-bold"> eficientes y funcionales. </span>
          <br />
          <br />
          Mi enfoque combina{" "}
          <span className="font-bold">
            habilidades técnicas, creatividad y atención al detalle
          </span>{" "}
          para ofrecer{" "}
          <span className="font-bold">
            {" "}
            aplicaciones web de alto rendimiento.{" "}
          </span>{" "}
          <br /> Busco aportar valor a cada proyecto a través del{" "}
          <span className="font-bold">
            {" "}
            aprendizaje constante y la colaboración en equipo.
          </span>
        </h2>
      </div>
    </div>
  );
}
