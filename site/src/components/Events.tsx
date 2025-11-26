import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import liveMusicImage from "@/assets/live-music2.jpg";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: "Show Sertanejo",
      date: "Sábado, 30 Nov",
      time: "20h",
      image: liveMusicImage,
      description: "Noite especial com os melhores hits do sertanejo",
    },
    {
      title: "Forró Pé de Serra",
      date: "Sexta, 06 Dez",
      time: "21h",
      image: liveMusicImage,
      description: "Forró tradicional com sanfona, zabumba e triângulo",
    },
    {
      title: "MPB Acústico",
      date: "Domingo, 08 Dez",
      time: "18h",
      image: liveMusicImage,
      description: "Tarde de música popular brasileira em formato intimista",
    },
  ];

  return (
    <section id="eventos" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Shows & <span className="text-primary">Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira a programação dos próximos eventos e não perca nenhuma apresentação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 border-border hover:border-primary/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-foreground">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-foreground">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-foreground">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>Bar do Lucão</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                    onClick={() => window.open("https://wa.me/558386435697", "_blank")}
                  >
                    Mais Informações
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
