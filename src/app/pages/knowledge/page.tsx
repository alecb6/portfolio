import Header from "@/components/Header";
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-12">
      <Header returnButton={true}/>
      <h1 className="text-3xl">Conocimiento</h1>
    </div>
  );
}
