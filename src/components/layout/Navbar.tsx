import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    // CAMBIO: bg-background-main/80 (opacidad del 80%) y backdrop-blur-xl
    // Se añade una transición de color para cuando hagas scroll
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-main/80 backdrop-blur-xl border-b border-on-surface/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* LOGO: Identidad de Marca (Ajustado a text-xl y tracking-tighter) */}
        <a href="#hero" className="group cursor-pointer">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-sans uppercase">
            WILLIAM <span className="text-brand-primary">DEV</span>
          </div>
          {/* Línea decorativa reactiva */}
          <div className="h-[1px] w-0 group-hover:w-full bg-brand-primary transition-all duration-500 opacity-50"></div>
        </a>

        {/* NAVEGACIÓN: Links con Inter y tracking-tight */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-[11px] tracking-[0.2em] uppercase text-on-surface-variant">
          <a href="#experience" className="hover:text-brand-primary transition-colors duration-300">{t('navbar.experience')}</a>
          <a href="#projects" className="hover:text-brand-primary transition-colors duration-300">{t('navbar.projects')}</a>
          <a href="#stack" className="hover:text-brand-primary transition-colors duration-300">{t('navbar.stack')}</a>
          <a href="#contact" className="text-brand-primary border-b border-brand-primary pb-0.5">{t('navbar.contact')}</a>
        </div>

        {/* LANGUAGE SWITCHER: Estilo "Glass Pill" exacto */}
        <div className="flex items-center gap-4">
          <div className="bg-on-surface/5 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-3 border border-on-surface/10 shadow-inner">
            <button
              onClick={() => setLanguage('EN')}
              className={`text-[10px] font-space font-bold transition-all cursor-pointer ${
                language === 'EN' ? 'text-brand-secondary' : 'text-on-surface/40 hover:text-on-surface'
              }`}
            >
              {t('navbar.en')}
            </button>

            <span className={`w-1 h-1 rounded-full transition-all duration-500 ${
              language === 'EN' ? 'bg-brand-secondary shadow-[0_0_8px_#00daf3]' : 'bg-brand-primary shadow-[0_0_8px_#10B981]'
            }`}></span>

            <button
              onClick={() => setLanguage('ES')}
              className={`text-[10px] font-space font-bold transition-all cursor-pointer ${
                language === 'ES' ? 'text-brand-primary' : 'text-on-surface/40 hover:text-on-surface'
              }`}
            >
              {t('navbar.es')}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;