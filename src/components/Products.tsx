import { Box, Truck, Car, Ship, Bike, Package } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Box,
      title: "Carreta baú",
      description: "Ideal para proteção total de cargas durante o transporte",
    },
    {
      icon: Package,
      title: "Carreta caçamba",
      description: "Perfeita para transporte de materiais e entulhos",
    },
    {
      icon: Truck,
      title: "Carreta duplo eixo",
      description: "Maior capacidade e estabilidade para cargas pesadas",
    },
    {
      icon: Car,
      title: "Carreta carro",
      description: "Desenvolvida especialmente para transporte de veículos",
    },
    {
      icon: Ship,
      title: "Carreta jet ski",
      description: "Projetada para transporte seguro de jet skis",
    },
    {
      icon: Ship,
      title: "Carreta barco",
      description: "Robusta e confiável para embarcações",
    },
    {
      icon: Bike,
      title: "Carreta moto",
      description: "Compacta e segura para motocicletas",
    },
    {
      icon: Bike,
      title: "Carreta quadriciclo",
      description: "Ideal para transporte de quadriciclos",
    },
    {
      icon: Truck,
      title: "Carreta plataforma",
      description: "Versátil para diversos tipos de carga",
    },
    {
      icon: Package,
      title: "Carreta graneleira",
      description: "Específica para transporte de grãos e materiais a granel",
    },
    {
      icon: Truck,
      title: "Engates",
      description: "Engates automotivos de alta qualidade e segurança",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossos produtos
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carretas personalizadas e engates de alta qualidade para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5517991810942"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
