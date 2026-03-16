import { motion } from "framer-motion";
import { Clock, Music, Heart, Globe } from "lucide-react";

const features = [
  { icon: Clock, title: "24h no Ar", text: "Louvor ininterrupto" },
  { icon: Music, title: "Alta Definição", text: "Qualidade sonora premium" },
  { icon: Heart, title: "Edificação", text: "Conteúdo que transforma" },
  { icon: Globe, title: "Sem Fronteiras", text: "De Apucarana para o mundo" },
];

const WhyListenSection = () => {
  return (
    <section className="relative z-10 -mt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card-strong rounded-3xl p-8 text-center group card-depth"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <f.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyListenSection;
