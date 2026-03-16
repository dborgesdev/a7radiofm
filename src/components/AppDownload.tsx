import { motion } from "framer-motion";
import phoneScreen from "@/assets/phone-screen.png";

const platforms = [
  {
    name: "Android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
        <path d="M17.523 2.236a.5.5 0 0 0-.86.509l1.09 1.845A7.468 7.468 0 0 0 12 2.5a7.468 7.468 0 0 0-5.753 2.09L7.337 2.745a.5.5 0 1 0-.86-.509L5.15 4.74A7.5 7.5 0 0 0 4.5 12v.5h15V12a7.5 7.5 0 0 0-.65-7.26l-1.327-2.504ZM8.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM4.5 14v5a2 2 0 0 0 2 2h1v2.5a1.5 1.5 0 0 0 3 0V21h3v2.5a1.5 1.5 0 0 0 3 0V21h1a2 2 0 0 0 2-2v-5h-15ZM2 10.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5Zm17 0a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5Z"/>
      </svg>
    ),
  },
  {
    name: "iOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z"/>
      </svg>
    ),
  },
  {
    name: "Windows",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
        <path d="M3 5.548l7.206-0.994v6.953H3V5.548zm0 12.904l7.206 0.994v-6.953H3v5.959zm8.006 1.103L21 21v-8.507H11.006v6.062zm0-14.11v7.062H21V3L11.006 5.445z"/>
      </svg>
    ),
  },
];

const AppDownload = () => {
  return (
    <section id="app" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-10" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-accent/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-spiritual/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
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
                  {platform.icon}
                  {platform.name}
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
            {/* Phone mockup with uploaded screen */}
            <div className="relative w-[320px] md:w-[380px] animate-float">
              {/* Phone frame */}
              <div className="relative rounded-[3rem] border-[8px] border-foreground/20 bg-background overflow-hidden shadow-2xl" style={{ aspectRatio: '9/19' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl z-10" />
                {/* Screen content */}
                <img
                  src={phoneScreen}
                  alt="App Rádio A7 Gospel"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 -z-10 brand-gradient opacity-20 blur-[60px] scale-110 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
