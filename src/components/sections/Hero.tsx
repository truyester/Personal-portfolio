import portrait from '../../assets/images/william-portrait.webp';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
      
      {/* Bloque de Texto (Izquierda) */}
      <div className="flex-1 space-y-8 z-10">
        
        {/* Insignia Bilingüe estilo Glassmorphism */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-background-surface rounded-full border border-on-surface/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
          <span className="text-xs font-bold tracking-widest text-on-surface font-space uppercase">
            {t('hero.badge')}
          </span>
        </div>

        {/* Titular Principal */}
        <h1 className="text-5xl md:text-7xl font-black text-[#fdfffa] leading-tight font-sans tracking-tight">
          {t('hero.name')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mt-2">
            {t('hero.title')}
          </span>
        </h1>

        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-sans">
          {t('hero.description')}
        </p>

        {/* The Kinetic Triggers (Botones) */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="px-8 py-4 bg-brand-primary text-background-main font-bold rounded-lg hover:bg-brand-secondary transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(0,218,243,0.4)] hover:-translate-y-1 cursor-pointer inline-flex items-center justify-center">
            {t('hero.viewProjects')}
          </a>
          <a href="#contact" className="px-8 py-4 bg-background-surface text-brand-primary font-bold rounded-lg border border-brand-primary/20 hover:border-brand-primary/60 transition-all duration-300 cursor-pointer inline-flex items-center justify-center">
            {t('hero.contact')}
          </a>
        </div>
      </div>

      {/* Bloque Visual / Retrato (Derecha) - Intentional Asymmetry */}
      <div className="flex-1 relative w-full max-w-md mx-auto aspect-[4/5] z-0 group">
         
         {/* Nebulosas de Neón (Atmospheric Depth) */}
         <div className="absolute top-10 -right-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] group-hover:bg-brand-secondary/20 transition-colors duration-700"></div>
         <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-[60px]"></div>
         
         {/* Contenedor de la Fotografía */}
         <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background-card border border-on-surface/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src={portrait} 
              alt="William Mendoza" 
              className="w-full h-full object-cover grayscale-0 md:grayscale contrast-125 transition-all duration-700 md:group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Overlay sutil para profundidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-main/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
         </div>

        {/* Tarjeta Flotante del Stack (Modular Drift) */}
        <div className="absolute -bottom-6 -left-8 md:-left-12 bg-background-surface/90 backdrop-blur-xl p-6 rounded-xl border border-on-surface/10 shadow-2xl z-20 transition-transform duration-500 hover:-translate-y-2">
          <div className="flex items-center gap-4">
            <span className="text-brand-primary font-bold text-xl font-space">{"</>"}</span>
            <div>
              <div className="text-[10px] text-on-surface-variant font-space tracking-widest uppercase mb-1">
                {t('hero.stackLabel')}
              </div>
              <div className="text-sm font-bold text-[#fdfffa] font-sans">{t('hero.stackValue')}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;