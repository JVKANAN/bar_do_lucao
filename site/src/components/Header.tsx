import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Shows & Eventos", href: "#eventos" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "Ações Sociais", href: "#acoes" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // se estiver scrolled OU se o menu mobile estiver aberto, aplica fundo
  const headerClasses =
    isScrolled || isMobileMenuOpen
      ? "bg-background/95 backdrop-blur-md shadow-warm"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center space-x-3 group"
          >
            <img
              src={logoWhite}
              alt="Bar do Lucão"
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Navegação desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão WhatsApp desktop */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              onClick={() => window.open("https://wa.me/55838643569", "_blank")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              WhatsApp
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div
            className="
              lg:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4
              bg-[#2B1D17]/95 backdrop-blur-sm text-white
              -mx-4 px-4
            "
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => window.open("https://wa.me/55838643569", "_blank")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              WhatsApp
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
