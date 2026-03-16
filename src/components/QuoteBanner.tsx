import { motion } from "framer-motion";
import quoteBg from "@/assets/quote-bg.jpg";

const QuoteBanner = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={quoteBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 brand-gradient opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold hero-text-gradient max-w-4xl mx-auto leading-tight">
          "Aqui, cada nota toca a alma e cada palavra reacende a fé."
        </blockquote>
        <p className="mt-6 text-muted-foreground text-lg font-body">— Rádio A7 Gospel</p>
      </motion.div>
    </section>
  );
};

export default QuoteBanner;
