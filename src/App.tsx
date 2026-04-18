// src/App.tsx
import { LanguageProvider } from './components/hooks/useLanguage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience.tsx';
import Projects from './components/sections/Projects';
import Stack from './components/sections/Stack';
import Contact from './components/sections/Contact';

function App() {
  return (
    <LanguageProvider>
      {/* Usamos el color base más profundo para el fondo de toda la aplicación */}
      <main className="min-h-screen bg-[#10131a] text-[#e1e2eb] font-sans">
        <Navbar />
      
      <div className="max-w-7xl mx-auto px-8">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </div>
      <Footer />
    </main>
    </LanguageProvider>
  );
}

export default App;