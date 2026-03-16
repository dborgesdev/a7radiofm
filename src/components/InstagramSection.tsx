import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Viva a fé em <span className="brand-gradient-text">movimento</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
            Acompanhe nossos bastidores e conteúdos exclusivos no Instagram.
          </p>
          <motion.a
            href="https://www.instagram.com/agospelfm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 glass-card-strong px-8 py-4 rounded-2xl font-semibold text-foreground hover:border-accent/30 transition-all border border-accent/20"
          >
            <Instagram size={24} className="text-accent" />
            Seguir @agospelfm
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
