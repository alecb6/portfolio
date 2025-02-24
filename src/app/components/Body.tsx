import Slider from "./slider/Slider";

export default function Body() {
  return (
    <main className="grid grid-cols-1 grid-rows-4 gap-4 items-center justify-center p-4 min-w-[600px]">
      <div className="bg-gray-600 w-100 p-4 text-center min-h-[100px] image-filter">
        <Slider></Slider>
      </div>
      <div className="min-h-[100px] text-center">SLIDER</div>
    </main>
  );
}
