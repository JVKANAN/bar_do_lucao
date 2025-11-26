import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beer, Utensils, Coffee } from "lucide-react";
import foodDrinksImage from "@/assets/food-drinks.png";

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const menuCategories = [
    {
      icon: Beer,
      title: "Bebidas",
      items: [
        "Cervejas artesanais e tradicionais",
        "Cachaças premium",
        "Drinks especiais da casa",
        "Refrigerantes e sucos naturais",
      ],
    },
    {
      icon: Utensils,
      title: "Petiscos",
      items: [
        "Porções de carne de sol",
        "Tábua de queijos e embutidos",
        "Pastéis variados",
        "Batata frita artesanal",
      ],
    },
    {
      icon: Coffee,
      title: "Comidas da Casa",
      items: [
        "Galinha caipira assada",
        "Costela no bafo",
        "Buchada tradicional",
        "Arrumadinho especial",
      ],
    },
  ];

  return (
    <section id="cardapio" className="py-20 md:py-32 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabores tradicionais preparados com carinho para você e sua família
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="grid gap-8">
              {menuCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-warm"
                >
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden shadow-warm h-[500px]">
              <img
                src={foodDrinksImage}
                alt="Comidas e bebidas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
