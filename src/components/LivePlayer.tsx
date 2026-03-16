import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import carouselWorship from "@/assets/carousel-worship-1.jpg";
import carouselArtist from "@/assets/carousel-artist-1.jpg";
import carouselBand from "@/assets/carousel-band-1.jpg";
import carouselCrowd from "@/assets/carousel-crowd-1.jpg";

const slides = [carouselWorship, carouselArtist, carouselBand, carouselCrowd];

const LivePlayer = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="player" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <div className="inline-flex items-center gap-2 brand-gradient px-4 py-1.5 rounded-full text-xs font-semibold text-accent-foreground mb-4 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
            Ao Vivo
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Sintonize Agora
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-card-strong rounded-3xl overflow-hidden player-glow">
          
          <div className="p-4 pb-0 bg-transparent">
            <iframe
              src="https://player.hdradios.net/player-topo-html5/6774/000000"
              className="w-full rounded-2xl"
              style={{ height: '280px', border: 'none' }}
              title="Player Rádio A7 Gospel"
              loading="lazy"
              allow="autoplay" />
            
          </div>

          {/* Auto-sliding carousel */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            {slides.map((slide, i) =>
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: current === i ? 1 : 0 }}>
              
                <img
                src={slide}
                alt="Gospel worship"
                className="w-full h-full object-cover"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            )}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? 'bg-accent w-6' : 'bg-foreground/30'}`
                } />

              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default LivePlayer;