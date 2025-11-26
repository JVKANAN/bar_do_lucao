import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(83) 9 8643-5697",
      action: () => window.open("https://wa.me/558386435697", "_blank"),
      buttonText: "Enviar Mensagem",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@bardolucaoogba",
      action: () => window.open("https://www.instagram.com/bardolucaogba?igsh=OWVqbDJ0aXJ5OXJ1", "_blank"),
      buttonText: "Seguir no Instagram",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(83) 9 86435697",
      action: () => window.open("tel:+558386435697", "_blank"),
      buttonText: "Ligar Agora",
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ficou com alguma dúvida? Entre em contato conosco através dos canais abaixo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all shadow-warm hover:shadow-glow text-center"
            >
              <contact.icon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                {contact.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">{contact.info}</p>
              <Button
                onClick={contact.action}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {contact.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
