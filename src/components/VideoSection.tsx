import { motion } from "framer-motion";

const VideoSection = () => {
  // Parâmetros para limpar a interface do YouTube:
  // controls=1 (mantém barra), modestbranding=1 (remove logo grande), 
  // rel=0 (evita vídeos aleatórios ao pausar), iv_load_policy=3 (remove anotações)
  const videoId = "MmvdiG21xmk";
  const videoParams = "?modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0";
  const videoUrl = `https://www.youtube.com/embed/${videoId}${videoParams}`;

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Brilho de fundo para seguir o estilo A7 Gospel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Título H2 Estilizado */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sans font-bold text-white mb-10 text-center tracking-tight"
          >
            A Palavra em <span className="text-primary brightness-125">Destaque</span>
          </motion.h2>

          {/* Container do Vídeo com Aspect Ratio e Estilo Glass */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl shadow-primary/10"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="Mensagem A7 Gospel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Subtexto decorativo opcional */}
          <p className="mt-6 text-zinc-500 font-sans text-sm tracking-widest uppercase">
            Assista e seja edificado
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
