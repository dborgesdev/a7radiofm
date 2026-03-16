import { motion } from "framer-motion";
import { Radio, BookOpen, Heart } from "lucide-react";

const cards = [
  { title: "A Rádio", icon: Radio, text: "Nossa essência e missão", gradient: "from-primary to-primary/60" },
  { title: "Devocional", icon: BookOpen, text: "Alimento diário para a fé", gradient: "brand-gradient" },
  { title: "Pedido de Oração", icon: Heart, text: "Estamos com você", gradient: "from-secondary to-secondary/60" },
];

const QuickAccessGrid = () => {
  return (
    <section className="relative z-10 -mt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-card-strong rounded-3xl p-8 cursor-pointer card-depth group`}
            >
              <div className={`w-14 h-14 rounded-2xl ${card.gradient === 'brand-gradient' ? 'brand-gradient' : `bg-gradient-to-br ${card.gradient}`} flex items-center justify-center mb-5`}>
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
                  <card.icon size={24} className="text-accent-foreground" />
                </motion.div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground font-body">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessGrid;
