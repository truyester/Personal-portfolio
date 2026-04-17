import React, { useState } from 'react';
import portrait from '../../assets/images/william-portrait.webp';

// Activos
import iconTerminal from '../../assets/icons/terminal.svg';
import iconShare from '../../assets/icons/share.svg';
import iconSend from '../../assets/icons/send.svg';
import iconArrowOutward from '../../assets/icons/arrow_outward.svg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Conexión directa con la carpeta functions/api/contact.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        // El sistema vuelve al estado inicial tras 5 segundos
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        const errorData = await response.json();
        console.error('System Response Error:', errorData);
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Transmission Failure:', error);
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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

            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/truyester" target="_blank" rel="noreferrer" className="group p-6 bg-background-surface rounded-xl border border-on-surface/5 transition-all duration-500 hover:bg-background-card">
                <div className="flex justify-between items-start mb-8">
                  <img src={iconTerminal} alt="Terminal" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  <img src={iconArrowOutward} alt="" className="w-4 h-4 object-contain text-on-surface/20 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="font-space text-xs uppercase tracking-widest text-on-surface-variant">Repository</span>
                <span className="font-sans font-bold text-base text-on-surface">GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/william-dev-ven/" target="_blank" rel="noreferrer" className="group p-6 bg-background-surface rounded-xl border border-on-surface/5 transition-all duration-500 hover:bg-background-card">
                <div className="flex justify-between items-start mb-8">
                  <img src={iconShare} alt="Share" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  <img src={iconArrowOutward} alt="" className="w-4 h-4 object-contain text-on-surface/20 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="font-space text-xs uppercase tracking-widest text-on-surface-variant">Network</span>
                <span className="font-sans font-bold text-base text-on-surface">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-background-card rounded-2xl p-8 md:p-12 shadow-2xl relative border border-on-surface/5">
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative floating-label-input group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder=" "
                  className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-on-surface/10 focus:ring-0 focus:border-brand-primary transition-all duration-300 text-on-surface placeholder-transparent resize-none font-sans"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all duration-300 origin-left font-space text-xs uppercase tracking-widest">
                  Your Message
                </label>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <button 
                  type="submit" 
                  disabled={status === 'SENDING'}
                  className={`group relative inline-flex items-center justify-center px-10 py-4 font-bold rounded-lg overflow-hidden transition-all duration-300 ${
                    status === 'SENDING' ? 'bg-on-surface/10 cursor-wait' : 'bg-brand-primary text-background-main hover:scale-[1.02]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3 uppercase font-space tracking-widest text-sm">
                    {status === 'SENDING' ? 'Transmitting...' : 'Send Message'}
                    <img src={iconSend} alt="" className="w-4 h-4 object-contain brightness-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                
                {status === 'SUCCESS' && (
                  <p className="text-brand-primary font-space text-xs animate-pulse">
                    SYSTEM: Message received. Connection established.
                  </p>
                )}
                {status === 'ERROR' && (
                  <p className="text-red-500 font-space text-xs">
                    ERROR: Connection failed. Check logs or try again.
                  </p>
                )}
              </div>
            </form>

            <div className="mt-16 pt-8 border-t border-on-surface/5 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={portrait} alt="William" className="w-10 h-10 rounded-full object-cover grayscale opacity-70 border border-on-surface/10" />
                <div>
                  <p className="text-xs font-space uppercase tracking-widest text-on-surface-variant">Direct Inquiry</p>
                  <p className="text-sm font-bold text-on-surface">william29854mendoza@gmail.com</p>
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