import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-dvh w-full flex flex-col overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: current === i ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 aura-bg" />
      </div>

      {/* SOLUÇÃO DEFINITIVA: 
          1. 'pt-[80px] md:pt-[100px]' reserva o espaço exato do seu Header fixo.
          2. 'flex-1' faz com que este container ocupe todo o resto da tela disponível.
          3. 'justify-center' centraliza o texto apenas no espaço que sobrou abaixo do Header.
      */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center items-center text-center pt-[80px] md:pt-[100px] pb-12">
        
        <div className="max-w-5xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-[0.2em] text-muted-foreground mb-4 md:mb-6 font-body text-sm md:text-2xl">
            Você ouve e adora!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl md:text-7xl lg:text-8xl font-bold hero-text-gradient mb-6 md:mb-8 leading-[1.1]">
            Onde a Palavra ganha voz e a música vira oração.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 font-body">
            Conectando corações ao céu. Transmissão 24 horas de excelência, propósito e fé.
          </motion.p>

          <motion.a
            href="#player"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 brand-gradient px-6 py-3 md:px-8 md:py-4 rounded-2xl text-base md:text-lg font-semibold text-accent-foreground animate-pulse-glow cursor-pointer">
            <PlayCircle size={24} className="md:w-7 md:h-7" />
            Ouça Agora
          </motion.a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
