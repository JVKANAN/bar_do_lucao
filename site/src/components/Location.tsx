import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openMaps = () => {
    window.open(
      "https://maps.app.goo.gl/q9jkM84U1V9XXKs98",
      "_blank"
    );
  };

  return (
    <section id="localizacao" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Como <span className="text-primary">Chegar</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all shadow-warm">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Sítio Pendência, saída de Guarabira para Mari
                    <br />
                    Próximo à Cerâmica de Anselmo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all shadow-warm">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Contato
                  </h3>
                  <p className="text-muted-foreground">
                    WhatsApp: (83) 8643-5697
                    <br />
                    Instagram: @bardolucaoogba
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all shadow-warm">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Quinta a Domingo: 18h às 00h
                    <br />
                    Segunda a Quarta: Fechado
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={openMaps}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <Navigation className="mr-2" />
              Abrir no Google Maps
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[500px] rounded-lg overflow-hidden shadow-warm border border-border"
          >
            <iframe
              src="https://www.google.com/maps?q=-6.8918577,-35.4651618&hl=pt-BR&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Bar do Lucão"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
