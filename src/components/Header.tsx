import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-a7-gospel.png";

const navLinks = [
{ label: "Ao Vivo", target: "#player" },
{ label: "Sobre", target: "#sobre" },
{ label: "Conteúdo", target: "#conteudo" },
{ label: "App", target: "#app" }];


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
      scrolled ? "glass-card-strong py-3" : "py-5"}`
      }>
      
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img alt="Rádio A7 Gospel" className="h-10 md:h-12 w-auto" src="/lovable-uploads/786327d9-2a25-4976-be3a-22565d1cc42a.png" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.target}
            href={link.target}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300">
            
              {link.label}
            </a>
          )}
          <a
            href="#app"
            className="brand-gradient px-5 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
            
            Baixar App
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu">
          
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen &&
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden glass-card-strong mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4">
        
          {navLinks.map((link) =>
        <a
          key={link.target}
          href={link.target}
          onClick={() => setMobileOpen(false)}
          className="text-foreground/80 hover:text-foreground py-2 text-lg font-medium transition-colors">
          
              {link.label}
            </a>
        )}
          <a
          href="#app"
          onClick={() => setMobileOpen(false)}
          className="brand-gradient px-5 py-3 rounded-lg text-center font-semibold text-accent-foreground">
          
            Baixar App
          </a>
        </motion.div>
      }
    </motion.header>);

};

export default Header;