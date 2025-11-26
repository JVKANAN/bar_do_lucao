import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Cake, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivateEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventTypes = [
    {
      icon: Cake,
      title: "Aniversários",
      description: "Festas de aniversário com estrutura completa",
    },
    {
      icon: Users,
      title: "Confraternizações",
      description: "Eventos corporativos e encontros de grupos",
    },
    {
      icon: PartyPopper,
      title: "Celebrações",
      description: "Formaturas, comemorações e datas especiais",
    },
    {
      icon: Calendar,
      title: "Encontros Familiares",
      description: "Reuniões de família em ambiente acolhedor",
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
            Faça seu evento <span className="text-primary">conosco</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O Bar do Lucão também recebe aniversários, confraternizações, encontros de família
            e pequenos eventos privados
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-warm text-center"
            >
              <type.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card p-8 md:p-12 rounded-lg border border-primary/30 shadow-glow text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
            Estrutura completa para seu evento
          </h3>
          <p className="text-muted-foreground mb-8">
            Ambiente climatizado, área externa, sistema de som, iluminação e toda a estrutura
            necessária para tornar seu evento inesquecível
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/55838643569", "_blank")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/55838643569", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              Falar com Atendimento
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateEvents;
