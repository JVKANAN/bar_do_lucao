import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bar.png";
import logoWhite from "@/assets/logo-white.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bar do Lucão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logoWhite}
            alt="Bar do Lucão"
            className="w-64 md:w-80 lg:w-96 mx-auto mb-8"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
        >
          O melhor ponto de encontro
          <br />
          <span className="text-primary">às margens da estrada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Shows ao vivo, comida boa e ambiente para toda a família
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#eventos")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8 py-6 text-lg group"
          >
            <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
            Ver Próximos Eventos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("http://wa.me//558386435697", "_blank")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
          >
            <MessageCircle className="mr-2" />
            Chamar no WhatsApp
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
