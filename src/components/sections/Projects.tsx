import { useLanguage } from '../hooks/useLanguage';
import assistant from '../../assets/images/code-assistant.webp';
import iconArrowOutward from '../../assets/icons/arrow_outward.svg';
import orbitadigitalsolutions from '../../assets/images/orbitadigitalsolutions.webp';

const Projects = () => {
  const { locale, t } = useLanguage();
  const projects = locale.projects.items.map((item: any, index: number) => ({
    ...item,
    image: index === 0 ? orbitadigitalsolutions : assistant,
  }));

  return (
    <section id="projects" className="py-32 bg-background-main">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-space tracking-[0.4em] text-brand-secondary uppercase">
              {t('projects.label')}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-on-surface font-sans">
              {t('projects.headline')}
            </h3>
          </div>
          <div className="text-on-surface-variant font-space text-[10px] tracking-[0.3em] uppercase border-b border-brand-secondary/30 pb-2">
            {t('projects.metadata')}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* Contenedor de Imagen (The Glass Frame - Solución 2) */}
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-[#0a0c10] border border-on-surface/5 mb-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Capa 1: Fondo difuminado para rellenar espacios (especialmente para el asistente que es más cuadrado) */}
                <img 
                  src={project.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-3xl scale-110"
                />

                {/* Capa 2: Imagen principal contenida (Sin recortes) */}
                <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                </div>

                {/* Overlay de profundidad atmosférica */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-main/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                {/* Icono de acción flotante */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-secondary/10 backdrop-blur-md border border-brand-secondary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <img src={iconArrowOutward} alt="" className="w-4 h-4 object-contain" />
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
                  {project.tags.map((tag: string, i: number) => (
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