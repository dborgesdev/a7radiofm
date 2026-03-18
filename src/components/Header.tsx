import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-a7-gospel.png";

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
        scrolled ? "glass-card-strong py-2" : "py-4"
      }`}
    >
      {/* MODIFICAÇÃO PRINCIPAL: 
          Alterado para grid grid-cols-3 para garantir o centro matemático.
      */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Lado Esquerdo: Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Centro: Logo (Centralizado no Grid) */}
        <div className="flex justify-start md:justify-center">
          <a href="#" className="flex items-center">
            <img 
              alt="Rádio A7 Sertanejo" 
              className="h-18 w-auto transition-all duration-300" 
              src="logo_a7gospel.png" 
            />
          </a>
        </div>

        {/* Lado Direito: Botão e Menu Mobile */}
        <div className="flex justify-end items-center gap-4">
          <a
            href="#app"
            className="hidden md:block brand-gradient px-5 py-2 rounded-lg text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform"
          >
            Baixar App
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
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
              className="text-foreground/80 hover:text-primary py-2 text-lg font-medium transition-colors"
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
