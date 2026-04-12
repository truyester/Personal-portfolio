
const Experience = () => {
  const jobs = [
    {
      role: "Freelance Web Developer",
      company: "Orbita Digital Solutions",
      period: "2020 — PRESENT",
      description: "Desarrollo de ecosistemas web de alto rendimiento. Especializado en transformar reglas de negocio complejas en interfaces elegantes con React y Next.js.",
      tags: ["React", "Next.js", "Tailwind", "System Design"]
    },
    {
      role: "Freelance Legal Translator",
      company: "Independent",
      period: "2024 — PRESENT",
      description: "Traducción técnica y legal de alta precisión para documentación de ingeniería y contratos internacionales.",
      tags: ["Translation", "Legal Tech", "English C2"]
    },
    {
      role: "English Language Teacher",
      company: "Go English For Everyone",
      period: "2022 — 2025",
      description: "Instrucción avanzada para profesionales. Implementación de currículos basados en Spaced Repetition y roleplays técnicos.",
      tags: ["Pedagogy", "Spaced Repetition", "C2 Proficiency"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background-surface/30">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Encabezado con el estilo "Digital Observatory" */}
        <div className="mb-20">
          <h2 className="text-sm font-space tracking-[0.4em] text-brand-primary uppercase mb-4">
            Professional Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-on-surface font-sans max-w-2xl">
            Ingeniería y lenguaje fusionados en <span className="text-on-surface/40">soluciones técnicas.</span>
          </h3>
        </div>

        {/* Grid con "Modular Drift" (Asimetría) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Línea decorativa técnica */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-brand-primary/20 via-on-surface/5 to-transparent hidden md:block"></div>

          {jobs.map((job, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl bg-background-card border border-on-surface/5 hover:border-brand-primary/20 transition-all duration-500 group shadow-2xl ${
                index % 2 !== 0 ? 'md:mt-16' : '' // Aquí aplicamos la asimetría
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-space tracking-widest text-brand-secondary font-bold uppercase">
                  {job.period}
                </span>
                <span className="material-symbols-outlined text-on-surface/20 group-hover:text-brand-primary transition-colors">
                  terminal
                </span>
              </div>

              <h4 className="text-2xl font-bold text-on-surface mb-2 font-sans group-hover:text-brand-primary transition-colors">
                {job.role}
              </h4>
              <p className="text-sm font-space text-on-surface/60 mb-6 uppercase tracking-wider">
                {job.company}
              </p>
              
              <p className="text-on-surface-variant leading-relaxed text-sm mb-8">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-on-surface/5 text-[9px] font-space text-on-surface/40 tracking-tighter uppercase border border-on-surface/5 group-hover:border-brand-primary/10"
                  >
                    {tag}
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

export default Experience;