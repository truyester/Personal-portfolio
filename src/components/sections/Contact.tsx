import portrait from '../../assets/images/william-portrait.webp';

// 1. IMPORTA TUS ICONOS AQUÍ
import iconTerminal from '../../assets/icons/terminal.svg';
import iconShare from '../../assets/icons/share.svg';
import iconSend from '../../assets/icons/send.svg';
import iconArrowOutward from '../../assets/icons/arrow_outward.svg';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background-main">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight bg-gradient-to-br from-on-surface to-brand-primary bg-clip-text text-transparent font-sans">
                Initiate<br/>Connection
              </h1>
              <p className="text-base text-on-surface-variant max-w-md font-light leading-relaxed font-sans">
                Currently architecting high-performance digital ecosystems. My terminal is open for your next project.
              </p>
            </div>

            {/* BENTO BOXES CON TUS ICONOS PNG */}
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="group p-6 bg-background-surface rounded-xl border border-on-surface/5 transition-all duration-500 hover:bg-background-card">
                <div className="flex justify-between items-start mb-8">
                  {/* ICONO TERMINAL PNG */}
                  <img src={iconTerminal} alt="Terminal" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  <img src={iconArrowOutward} alt="Arrow Outward" className="w-4 h-4 object-contain text-on-surface/20 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="font-space text-xs uppercase tracking-widest text-on-surface-variant">Repository</span>
                <span className="font-sans font-bold text-base text-on-surface">GitHub</span>
              </a>
              
              <a href="#" className="group p-6 bg-background-surface rounded-xl border border-on-surface/5 transition-all duration-500 hover:bg-background-card">
                <div className="flex justify-between items-start mb-8">
                  {/* ICONO SHARE PNG */}
                  <img src={iconShare} alt="Share" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  <img src={iconArrowOutward} alt="Arrow Outward" className="w-4 h-4 object-contain text-on-surface/20 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="font-space text-xs uppercase tracking-widest text-on-surface-variant">Network</span>
                <span className="font-sans font-bold text-base text-on-surface">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-background-card rounded-2xl p-8 md:p-12 shadow-2xl relative border border-on-surface/5">
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative floating-label-input group">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-on-surface/10 focus:ring-0 focus:border-brand-primary transition-all duration-300 text-on-surface placeholder-transparent font-sans"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all duration-300 origin-left font-space text-xs uppercase tracking-widest">
                    Full Name
                  </label>
                </div>

                <div className="relative floating-label-input group">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-on-surface/10 focus:ring-0 focus:border-brand-primary transition-all duration-300 text-on-surface placeholder-transparent font-sans"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all duration-300 origin-left font-space text-xs uppercase tracking-widest">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative floating-label-input group">
                <textarea
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-on-surface/10 focus:ring-0 focus:border-brand-primary transition-all duration-300 text-on-surface placeholder-transparent resize-none font-sans"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all duration-300 origin-left font-space text-xs uppercase tracking-widest">
                  Your Message
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="group relative inline-flex items-center justify-center px-10 py-4 bg-brand-primary text-background-main font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center gap-3 uppercase font-space tracking-widest text-sm">
                    Send Message
                    <img src={iconSend} alt="Send" className="w-4 h-4 object-contain brightness-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-16 pt-8 border-t border-on-surface/5 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={portrait} alt="William" className="w-10 h-10 rounded-full object-cover grayscale opacity-70 border border-on-surface/10" />
                <div>
                  <p className="text-xs font-space uppercase tracking-widest text-on-surface-variant">Direct Inquiry</p>
                  <p className="text-sm font-bold text-on-surface">hello@kineticarchitect.io</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-space uppercase tracking-widest text-on-surface-variant">Encryption</p>
                <p className="text-xs font-bold text-brand-secondary font-space tracking-widest">AES-256 SECURED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;