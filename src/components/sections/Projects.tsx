const Projects = () => {
  const projects = [
    {
      title: "Orbita Digital Solutions",
      category: "Full-Stack Ecosystem",
      description: "Plataforma escalable para servicios digitales con optimización de Core Web Vitals y arquitectura basada en componentes reactivos.",
      tags: ["React", "Next.js", "Tailwind", "Vite"],
      // Reemplaza con tus capturas reales en public/projects/
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Nexus Core System",
      category: "Data Architecture",
      description: "Dashboard de análisis técnico con procesamiento de datos en tiempo real y seguridad de grado industrial.",
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bbda38656a93?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background-main">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-space tracking-[0.4em] text-brand-secondary uppercase">
              Featured Case Studies
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-on-surface font-sans">
              Selected <span className="text-on-surface/40">Work.</span>
            </h3>
          </div>
          <div className="text-on-surface-variant font-space text-[10px] tracking-[0.3em] uppercase border-b border-brand-secondary/30 pb-2">
            Systems Engineering / 2024
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* Contenedor de Imagen (The Glass Frame) */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-background-card border border-on-surface/5 mb-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Imagen con filtro editorial */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-115 opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />

                {/* Overlay de profundidad atmosférica */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-main via-transparent to-transparent opacity-90 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Icono de acción flotante */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-secondary/10 backdrop-blur-md border border-brand-secondary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="material-symbols-outlined text-brand-secondary text-xl">arrow_outward</span>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-secondary/40"></span>
                  <span className="text-[10px] font-space text-brand-secondary tracking-[0.2em] uppercase font-bold">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-3xl font-bold text-on-surface group-hover:text-brand-secondary transition-colors duration-300 font-sans tracking-tight">
                  {project.title}
                </h4>

                <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Chips de Tecnología (Technical Tokens) */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-space text-on-surface/30 uppercase tracking-[0.2em] border-l border-on-surface/10 pl-3">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;