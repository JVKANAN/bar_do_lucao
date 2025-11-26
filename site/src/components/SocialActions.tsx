import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SocialActions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const actions = [
    {
      icon: Heart,
      title: "Campanhas Solidárias",
      description:
        "Organizamos campanhas de arrecadação de alimentos e roupas para famílias necessitadas da região",
    },
    {
      icon: Users,
      title: "Apoio à Comunidade",
      description:
        "Parceria com projetos sociais locais, cedendo espaço para eventos beneficentes",
    },
    {
      icon: Gift,
      title: "Eventos Beneficentes",
      description:
        "Shows e eventos especiais com renda revertida para instituições de caridade",
    },
  ];

  return (
    <section id="acoes" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Notícias & <span className="text-primary">Ações Sociais</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O Bar do Lucão é mais que um espaço de entretenimento, somos parte ativa da comunidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-glow transition-all duration-300 border-border hover:border-primary/50 bg-card">
                <CardHeader className="text-center pb-4">
                  <action.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl font-display text-foreground">
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-card p-8 md:p-12 rounded-lg border border-border shadow-warm text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
            Quer participar das nossas ações?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para saber como você ou sua empresa podem contribuir
            com nossas iniciativas sociais
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialActions;
