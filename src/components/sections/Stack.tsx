

const Stack = () => {
  const stackGroups = [
    {
      title: "Frontend Architecture",
      description: "Interfaces de alta fidelidad con un enfoque en la ruta crítica de renderizado y performance.",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      title: "Backend & Systems",
      description: "Construcción de APIs robustas y gestión de bases de datos bajo principios de escalabilidad.",
      tools: ["Node.js", "PostgreSQL", "Firebase", "REST APIs", "GraphQL", "Python"]
    },
    {
      title: "Engineering Tools",
      description: "Sistemas de diseño, control de versiones y entornos de despliegue profesional.",
      tools: ["Figma", "Git / GitHub", "Docker", "Vercel", "Ubuntu", "Photoshop"]
    }
  ];

  return (
    <section id="stack" className="py-32 bg-background-surface/20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Título de Sección */}
        <div className="mb-20 space-y-4">
          <h2 className="text-sm font-space tracking-[0.4em] text-brand-primary uppercase">
            Technical Breadcrumbs
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-on-surface font-sans">
            The <span className="text-on-surface/40">Stack.</span>
          </h3>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stackGroups.map((group, index) => (
            <div key={index} className="flex flex-col space-y-8 group">
              
              {/* Info de la Categoría */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-brand-secondary/30 group-hover:bg-brand-secondary transition-colors duration-500"></div>
                  <h4 className="text-xl font-bold text-on-surface font-sans">
                    {group.title}
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
                  {group.description}
                </p>
              </div>

              {/* Contenedor de Pills (Chips técnicos) */}
              <div className="flex flex-wrap gap-3">
                {group.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 bg-background-card border border-on-surface/5 rounded-full text-[10px] font-space font-bold tracking-widest text-on-surface-variant uppercase hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;