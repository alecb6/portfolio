export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-8 justify-between items-center">
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="#">Alex</a>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/experience">Experiencia</a>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/projects">Proyectos</a>
          </li>
          <li className="text-2xl font-bold hover:scale-110 hover:border-b-2">
            <a href="/skills">Conocimiento</a>
          </li>
        </ul>
      </nav>
    </header>
);

}
