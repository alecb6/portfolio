import React from "react";
import Slider from "@/components/slider/Slider";
import Information from "@/components/profile/Information";

export default function Home() {
  return (
    <main className="pt-12">
      <div className="bg-gray-600 w-100 p-4 text-center image-filter hidden md:flex">
        <Slider></Slider>
      </div>
      <div className="text-center">
        <Information />
      </div>
    </main>
  );
}
