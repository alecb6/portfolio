import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-12 relative overflow-hidden w-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
