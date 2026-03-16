import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import cardBible from "@/assets/card-bible.jpg";
import cardSunrise from "@/assets/card-sunrise.jpg";
import cardWater from "@/assets/card-water.jpg";
import cardPrayer from "@/assets/card-prayer.jpg";
import cardFamily from "@/assets/card-family.jpg";
import cardYouth from "@/assets/card-youth.jpg";

const items = [
  { image: cardBible, title: "Dicas para ler a Bíblia", content: "Estratégias de leitura anual e compreensão contextual. Descubra métodos eficazes para mergulhar na Palavra de Deus todos os dias, criando uma rotina de estudo bíblico que transforma sua vida espiritual." },
  { image: cardSunrise, title: "30 Afirmações Diárias", content: "Declare a Palavra sobre sua vida todas as manhãs. Uma coleção poderosa de afirmações baseadas nas Escrituras para começar cada dia com fé, coragem e propósito divino." },
  { image: cardWater, title: "Versículos para Hidratar a Alma", content: "Promessas de refrigério e esperança em tempos secos. Versículos selecionados que trazem consolo, paz e renovação para momentos de dificuldade e cansaço espiritual." },
  { image: cardPrayer, title: "Mensagens Edificantes", content: "Reflexões profundas de nossos pastores e convidados. Mensagens que tocam o coração, fortalecem a fé e inspiram uma vida de propósito e intimidade com Deus." },
  { image: cardFamily, title: "Construindo o Lar", content: "Princípios cristãos para uma família inabalável. Orientações bíblicas para fortalecer os laços familiares, criar filhos na fé e construir um lar alicerçado no amor de Deus." },
  { image: cardYouth, title: "Juventude com Propósito", content: "Como manter a fé ardente na geração atual. Conteúdo voltado para jovens que desejam viver com propósito, enfrentar desafios e impactar o mundo com o evangelho." },
];

const ContentCards = () => {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

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
              onClick={() => setSelectedItem(item)}
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

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="glass-card-strong border-border/50 max-w-lg">
          {selectedItem && (
            <>
              <div className="rounded-2xl overflow-hidden mb-4 -mx-2 -mt-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl brand-gradient-text">
                  {selectedItem.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground font-body text-base leading-relaxed pt-3">
                  {selectedItem.content}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContentCards;
