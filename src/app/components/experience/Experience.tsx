import { FaBuilding, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Empresa Tecnológica",
      position: "Desarrollador Web",
      period: "Enero 2023 - Presente",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web con React y Laravel",
        "Optimización de bases de datos SQL y mejora de rendimiento",
        "Colaboración en equipos ágiles utilizando metodología Scrum"
      ]
    },
    {
      company: "Agencia Digital",
      position: "Desarrollador Frontend",
      period: "Junio 2021 - Diciembre 2022",
      description: [
        "Creación de interfaces de usuario con HTML, CSS y JavaScript",
        "Integración de APIs y desarrollo de componentes interactivos",
        "Adaptación de diseños para diferentes dispositivos (responsive)"
      ]
    },
    {
      company: "Freelance",
      position: "Desarrollador Web",
      period: "Enero 2020 - Mayo 2021",
      description: [
        "Desarrollo de sitios web personalizados para pequeñas empresas",
        "Implementación de soluciones e-commerce",
        "Mantenimiento y actualización de sitios existentes"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto mt-16">
      <h1 className="text-5xl font-bold mb-16 text-center">Experiencia</h1>

      <div className="w-full space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="bg-accent/50 p-3 rounded-full">
                <FaBuilding className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <h4 className="text-lg text-primary/80">{exp.position}</h4>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FaCalendarAlt size={16} />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="mt-4 ml-4 border-l-2 border-accent/50 pl-6">
              <ul className="space-y-2">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaLaptopCode className="text-primary/70 mt-1 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
