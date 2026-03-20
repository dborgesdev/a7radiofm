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
    {/* 1. Trocamos 'items-center' por 'flex-col' e adicionamos 'pt-32 md:pt-40' para blindar a área do header */}
    <section className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-32 md:pt-40 pb-16">
      {/* Background slideshow */}
      <div className="absolute inset-0">
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

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-spiritual/10 blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

      {/* 2. Adicionamos 'my-auto' para garantir a centralização no espaço restante, sem invadir o topo */}
      <div className="relative z-10 container mx-auto px-4 text-center my-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase tracking-[0.2em] text-muted-foreground mb-6 font-body md:text-2xl text-base">
          Você ouve e adora!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold hero-text-gradient max-w-5xl mx-auto mb-8">
          Onde a Palavra ganha voz e a música vira oração.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body">
          Conectando corações ao céu. Transmissão 24 horas de excelência, propósito e fé.
        </motion.p>

        <motion.a
          href="#player"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 brand-gradient px-8 py-4 rounded-2xl text-lg font-semibold text-accent-foreground animate-pulse-glow cursor-pointer">
          <PlayCircle size={28} />
          Ouça Agora
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
