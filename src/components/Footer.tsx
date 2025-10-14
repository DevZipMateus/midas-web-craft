import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:17991810942" 
                className="flex items-start gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(17) 99181-0942</span>
              </a>
              <a 
                href="mailto:midasreboques@gmail.com" 
                className="flex items-start gap-3 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>midasreboques@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Av. Danilo Galeazzi, 3316<br />Jardim João Paulo II<br />CEP 15051-155</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Segunda a Sexta<br />08:00 às 18:00</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Redes sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/midasreboques/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/midasreboques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MIDAS REBOQUES E ENGATES. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 62.220.109/0001-91</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
