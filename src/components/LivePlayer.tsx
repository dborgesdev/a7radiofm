import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import carouselWorship from "@/assets/carousel-worship-1.jpg";
import carouselArtist from "@/assets/carousel-artist-1.jpg";
import carouselBand from "@/assets/carousel-band-1.jpg";
import carouselCrowd from "@/assets/carousel-crowd-1.jpg";

const images = [carouselWorship, carouselArtist, carouselBand, carouselCrowd];

const LivePlayer = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 brand-gradient px-4 py-1.5 rounded-full text-xs font-semibold text-accent-foreground mb-4 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
            Ao Vivo
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Ouça Agora
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-texas-dark/30 max-w-4xl mx-auto"
        >
          {/* Slideshow background */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                width={1920}
                height={1080}
              />
            ))}
            <div className="absolute inset-0 bg-background/70" />
            <div className="absolute inset-0 aura-bg" />

            {/* Equalizer bars */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-[#F0008F]"
                  animate={{
                    height: [8, Math.random() * 30 + 10, 8],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player iframe */}
          <div className="relative bg-texas-dark">
            <iframe
              src="https://player.srvvox.com.br/player-topo-html5/7680/000000"
              className="h-10 sm:h-20 w-full border-0"
              title="Texas Brasil FM - Player ao vivo"
              allow="autoplay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivePlayer;
