import { motion } from "framer-motion";
import cardBible from "@/assets/card-bible.jpg";
import cardSunrise from "@/assets/card-sunrise.jpg";
import cardWater from "@/assets/card-water.jpg";
import cardPrayer from "@/assets/card-prayer.jpg";
import cardFamily from "@/assets/card-family.jpg";
import cardYouth from "@/assets/card-youth.jpg";

const items = [
  { image: cardBible, title: "Dicas para ler a Bíblia" },
  { image: cardSunrise, title: "30 Afirmações Diárias" },
  { image: cardWater, title: "Versículos para Hidratar a Alma" },
  { image: cardPrayer, title: "Mensagens Edificantes" },
  { image: cardFamily, title: "Construindo o Lar" },
  { image: cardYouth, title: "Juventude com Propósito" },
];

const ContentCards = () => {
  return (
    <section id="conteudo" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nutrição para a <span className="brand-gradient-text">Alma</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto">
            Materiais exclusivos para fortalecer sua jornada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card rounded-3xl overflow-hidden cursor-pointer card-depth"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:brand-gradient-text transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
