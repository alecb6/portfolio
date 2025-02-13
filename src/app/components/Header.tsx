export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-4 justify-between items-center">
          <li>
            <a href="#">Alex</a>
          </li>
          <li>
            <a href="/experience">Experiencia</a>
          </li>
          <li>
            <a href="/projects">Proyectos</a>
          </li>
          <li>
            <a href="/skills">Conocimiento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
