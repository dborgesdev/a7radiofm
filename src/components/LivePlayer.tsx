import { motion } from "framer-motion";

const LivePlayer = () => {
  return (
    <section id="player" className="py-24 relative overflow-hidden">
      {/* Background glow */}
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
            Sintonize Agora
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-card-strong rounded-3xl p-4 player-glow"
        >
          <iframe
            src="https://player.hdradios.net/player-topo-html5/6774/000000"
            className="w-full rounded-2xl"
            style={{ height: '280px', border: 'none' }}
            title="Player Rádio A7 Gospel"
            loading="lazy"
            allow="autoplay"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LivePlayer;
