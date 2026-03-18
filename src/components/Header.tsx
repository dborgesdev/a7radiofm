import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ao Vivo", target: "#player" },
  { label: "Sobre", target: "#sobre" },
  { label: "Conteúdo", target: "#conteudo" },
  { label: "App", target: "#app" }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card-strong py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* 1. ZONA ESQUERDA: Menu Mobile (Mobile) / Logo (Desktop) */}
        <div className="flex flex-1 md:flex-none items-center">
          {/* Botão Menu - Visível apenas no Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo - Visível apenas no Desktop nesta posição */}
          <a href="#" className="hidden md:flex items-center gap-2">
            <img 
              alt="Rádio A7 Gospel" 
              className="h-20 w-auto object-contain transition-all duration-300" 
              src="logo_a7gospel.png" 
            />
          </a>
        </div>

        {/* 2. ZONA CENTRAL: Logo (Apenas no Mobile) / Nav Links (Desktop) */}
        <div className="flex flex-[2] md:flex-1 justify-center md:justify-start md:pl-12">
          {/* Logo Centralizado - Visível apenas no Mobile */}
          <a href="#" className="md:hidden flex items-center">
            <img 
              alt="Rádio A7 Gospel" 
              className="h-[80px] w-auto object-contain" 
              src="logo_a7gospel.png" 
            />
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                className="text-sm font-medium text-foreground/70 hover:text-[#FF4E00] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 3. ZONA DIREITA: Espaçador (Mobile) / Botão CTA (Desktop) */}
        <div className="flex flex-1 md:flex-none justify-end">
          <a
            href="#app"
            className="hidden md:block brand-gradient px-6 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform"
          >
            Baixar App
          </a>
          
          {/* Espaçador invisível no mobile para manter o centro do logo perfeito */}
          <div className="w-10 md:hidden"></div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card-strong mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4 shadow-2xl border border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              onClick={() => setMobileOpen(false)}
              className="text-foreground/80 hover:text-[#FF4E00] py-2 text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#app"
            onClick={() => setMobileOpen(false)}
            className="brand-gradient px-5 py-3 rounded-lg text-center font-semibold text-accent-foreground"
          >
            Baixar App
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
