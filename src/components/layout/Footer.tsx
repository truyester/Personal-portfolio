const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-xl bg-background-main border-t border-on-surface/5 px-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-lg">
        
        {/* LADO IZQUIERDO: Identidad de Marca */}
        <div className="flex flex-col items-center md:items-start gap-xs text-center md:text-left">
          <div className="text-h5 font-heading-bold text-on-surface tracking-tighter uppercase font-sans">
            WILLIAM <span className="text-brand-primary">DEV</span>
          </div>
          <p className="text-[10px] font-space text-on-surface/30 uppercase tracking-[0.2em] leading-relaxed">
            © {currentYear} Engineered for precision by William Mendoza. <br className="md:hidden" />
            All rights reserved.
          </p>
        </div>

        {/* CENTRO: Navegación Técnica (Socials) */}
        <div className="flex items-center gap-lg font-space text-[11px] tracking-[0.3em] uppercase">
          <a 
            href="https://github.com/truyester" 
            target="_blank" 
            rel="noreferrer"
            className="text-on-surface/40 hover:text-brand-secondary transition-all duration-300 hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="text-on-surface/40 hover:text-brand-secondary transition-all duration-300 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="text-on-surface/40 hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Terminal
          </a>
        </div>

        {/* LADO DERECHO: Metadatos del Sistema (Build ID) */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-sm px-4 py-2 bg-background-surface rounded-lg border border-on-surface/5 shadow-inner">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-on-surface/20 tracking-widest">BUILD_REF</span>
              <span className="text-[10px] font-mono text-brand-primary font-bold">v4.1.0-STABLE</span>
            </div>
            <div className="w-[1px] h-6 bg-on-surface/10 mx-1"></div>
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
          </div>
        </div>

      </div>
      
      {/* Micro-detalle final: Línea de fin de ejecución */}
      <div className="max-w-7xl mx-auto mt-lg text-center md:text-right">
        <span className="text-[9px] font-mono text-on-surface/10 uppercase tracking-[0.5em]">
          -- End of Line --
        </span>
      </div>
    </footer>
  );
};

export default Footer;