import { Wrench, Settings, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Fabricação de engates",
      description: "Engates automotivos fabricados com materiais de alta qualidade, garantindo segurança e durabilidade para seu veículo.",
    },
    {
      icon: Settings,
      title: "Instalação de engates",
      description: "Instalação profissional e certificada de engates, seguindo todas as normas técnicas e de segurança.",
    },
    {
      icon: Wrench,
      title: "Manutenção de engates",
      description: "Serviço completo de manutenção preventiva e corretiva para manter seus engates sempre em perfeito funcionamento.",
    },
    {
      icon: Building2,
      title: "Fabricação de carretas",
      description: "Carretas personalizadas sob medida, desenvolvidas de acordo com suas necessidades específicas de transporte.",
    },
    {
      icon: Wrench,
      title: "Manutenção de carretas",
      description: "Manutenção completa de carretas, incluindo revisões, reparos e substituição de componentes.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossos serviços
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados em instalação, manutenção e fabricação de engates e carretas personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:border-accent"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5517991810942"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Agende uma visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
