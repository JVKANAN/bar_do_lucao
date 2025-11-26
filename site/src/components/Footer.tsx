import { Instagram, MapPin, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img src={logoWhite} alt="Bar do Lucão" className="h-20 w-auto mb-4 mx-auto md:mx-0" />
            <p className="text-muted-foreground">
              O melhor ponto de encontro às margens da estrada
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                (83) 9 9999-9999
              </p>
              <p className="flex items-center justify-center">
                <Instagram className="w-4 h-4 mr-2 text-primary" />
                @bardolucaoogba
              </p>
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                Sítio Pendência
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Horário</h3>
            <div className="text-muted-foreground space-y-1">
              <p>Quinta a Domingo</p>
              <p className="text-primary font-semibold">18h às 00h</p>
              <p className="text-sm mt-2">Segunda a Quarta: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bar do Lucão. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Organização: Ozana e Família</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
