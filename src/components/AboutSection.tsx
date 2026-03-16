import { motion } from "framer-motion";
import aboutImg from "@/assets/about-listener.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden relative">
              <img src={aboutImg} alt="Ouvinte da Rádio A7 Gospel" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card-strong rounded-2xl p-5 accent-glow">
              <p className="font-display text-3xl font-bold brand-gradient-text">24h</p>
              <p className="text-sm text-muted-foreground">No ar para você</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conectando{" "}
              <span className="brand-gradient-text">Corações</span>{" "}
              ao Céu
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              A Rádio A7 Gospel é mais que uma emissora — é um canal de fé, esperança e adoração.
              Com uma programação inspiradora 24 horas por dia, levamos até você o melhor da música
              gospel, mensagens edificantes, devocionais e entrevistas que fortalecem a caminhada cristã.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body">
              Seja no carro, em casa ou no trabalho, sintonize e deixe a presença de Deus transformar o seu dia.
            </p>
            <motion.a
              href="#player"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 glass-card-strong px-8 py-4 rounded-2xl font-semibold text-foreground hover:border-accent/30 transition-all cursor-pointer"
            >
              Sintonize a Vida
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
