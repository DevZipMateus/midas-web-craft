import { Phone, Mail, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-primary-foreground pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZkNzAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            MIDAS REBOQUES E ENGATES
          </h1>
          
          <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-primary-foreground/90">
            Fabricação de carretas personalizadas e engates automotivos com qualidade, segurança e durabilidade
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 font-medium tracking-wide">
            QUALIDADE QUE ACOMPANHA SEGURANÇA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://wa.me/5517991810942"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Fale conosco
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("produtos");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/60 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Nossos produtos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Phone size={20} className="flex-shrink-0" />
              <span className="text-sm md:text-base">(17) 99181-0942</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Mail size={20} className="flex-shrink-0" />
              <span className="text-sm md:text-base break-all">midasreboques@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <MapPin size={20} className="flex-shrink-0" />
              <span className="text-sm md:text-base">São José do Rio Preto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
