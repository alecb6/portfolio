import { FaDownload } from "react-icons/fa";

const Information = () => {
  return (
    <div className="items-center justify-items-center relative overflow-hidden mt-12">
      <h1 className="text-7xl text-primaryText">
        <span className="flex flex-row items-center gap-4 mb-8">
          Hola
          <div className=" animate-bouncing repeat-infinite">!</div>
        </span>
      </h1>
      <div className="relative w-[100%] md:w-[600px] h-[320px] rounded-lg flex flex-col items-center justify-center p-4 text-primaryText">
        <div className="absolute top-0 right-0 border-t-4 border-r-4 border-primaryText w-8 h-8 animate-pulsing repeat-infinite"></div>
        <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-primaryText w-8 h-8 animate-pulsing repeat-infinite"></div>
        <h2 className="text-2xl mb-6">Mi nombre es Alejandro Cruz Ballestero</h2>
        <div className="font-thin text-clip text-base space-y-4">
          Soy un <span className="font-bold">desarrollador web</span> apasionado
          por crear soluciones digitales{" "}
          <span className="font-bold">eficientes y funcionales.</span>
          <p>
            Mi enfoque combina{" "}
            <span className="font-bold">
              habilidades técnicas, creatividad y atención al detalle
            </span>{" "}
            para ofrecer{" "}
            <span className="font-bold">
              aplicaciones web de alto rendimiento.
            </span>
          </p>
          <p>
            Busco aportar valor a cada proyecto a través del{" "}
            <span className="font-bold">
              aprendizaje constante y la colaboración en equipo.
            </span>
          </p>
        </div>
      </div>
      <a
        href="/cv/Alejandro-Cruz-Ballestero-CV.pdf"
        download
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-all ease-in-out"
      >
        <FaDownload /> Descargar CV
      </a>
    </div>
  );
};

export default Information;
