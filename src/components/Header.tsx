import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMidas from "@/assets/logo-midas.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoMidas} alt="MIDAS REBOQUES E ENGATES" className="h-16 sm:h-20 md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contato")} className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-left">
                Produtos
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 text-left">
                Contato
              </button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;