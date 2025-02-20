import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-300 text-black w-fit px-20 py-6 flex items-center justify-center rounded-full opacity-80 shadow-xl hover:scale-[1.03] transition-all">
      <nav>
        <ul className="flex flex-row gap-8 justify-between items-center">
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <Link href="/perfil">Alex</Link>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/experiencia">Experiencia</a>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/proyectos">Proyectos</a>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/conocimiento">Conocimiento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
