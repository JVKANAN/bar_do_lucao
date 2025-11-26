import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Music, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Music,
      title: "Shows ao Vivo",
      description: "Música de qualidade com artistas regionais e nacionais todos os fins de semana",
    },
    {
      icon: Heart,
      title: "Ambiente Familiar",
      description: "Espaço acolhedor e seguro para toda família aproveitar momentos especiais",
    },
    {
      icon: Users,
      title: "Tradição Local",
      description: "Referência em hospitalidade e boa gastronomia desde sempre",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Sobre o <span className="text-primary">Bar do Lucão</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Localizado no Sítio Pendência, o Bar do Lucão é referência em boa música, 
            ambiente familiar e atendimento acolhedor. Perfeito para quem está viajando, 
            para encontros entre amigos e confraternizações de família.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            <span className="text-primary font-semibold">Organização:</span> Ozana e Família
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-warm hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
