import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_2fr_2fr_20px] grid-cols-1 items-center justify-items-center min-h-screen pt-12 h-[100vh] relative overflow-hidden">
      <Header />
      <div className="flex flex-col items-center gap-4 p-4 w-[100%] md:w-[600px] mt-10">
        <h1 className="text-7xl">
          <span className="flex flex-row items-center gap-4">
            Hola
            <div className=" animate-bouncing repeat-infinite">!</div>
          </span>
        </h1>
        <div className="relative w-[100%] md:w-[600px] h-[320px] rounded-lg flex flex-col items-center justify-center p-4">
          <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white w-8 h-8"></div>
          <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white w-8 h-8"></div>
          <span className="text-2xl">Mi nombre es Alex</span>
          <h2 className="font-thin text-clip text-base">
            Soy un <span className="font-bold">desarrollador web</span>{" "}
            apasionado por crear soluciones digitales
            <span className="font-bold">eficientes y funcionales.</span>
            <br />
            <br />
            Mi enfoque combina
            <span className="font-bold">
              habilidades técnicas, creatividad y atención al detalle
            </span>
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
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
