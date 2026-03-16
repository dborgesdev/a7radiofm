import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const AppDownload = () => {
  return (
    <section id="app" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-10" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-accent/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-spiritual/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A7 Gospel no seu{" "}
              <span className="brand-gradient-text">bolso</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              Experiência completa de adoração onde quer que você esteja. Áudio impecável,
              estabilidade e interface intuitiva.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Android", "iOS", "Windows"].map((platform, i) => (
                <motion.a
                  key={platform}
                  href="https://player.hdradios.net/player-app-multi-plataforma/6774"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card-strong px-6 py-3 rounded-2xl flex items-center gap-3 font-semibold text-foreground hover:border-accent/30 transition-all"
                >
                  <Smartphone size={20} className="text-accent" />
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={appMockup}
              alt="App Rádio A7 Gospel"
              className="w-72 md:w-80 animate-float drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
