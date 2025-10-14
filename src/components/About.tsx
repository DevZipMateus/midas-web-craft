import { Award, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Sobre a Midas
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Fundada com o propósito de unir tradição e tecnologia, a Midas se consolidou no mercado por fabricar carretas sob medida, projetadas com alto padrão de qualidade e resistência.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seja para lazer, transporte de cargas específicas ou uso profissional, cada produto é desenvolvido com atenção aos detalhes e respeito às normas técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Missão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Entregar carretas e engates automotivos que unam segurança, durabilidade e praticidade, superando as expectativas dos clientes e acompanhando-os em cada jornada.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Visão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Ser reconhecida como a empresa líder em inovação e qualidade na fabricação de carretas no Brasil, expandindo nossa presença e fortalecendo cada vez mais a confiança dos clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Valores</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Compromisso com a satisfação de nossos clientes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Qualidade em cada detalhe de nossos produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Segurança como prioridade absoluta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Inovação para atender às novas demandas do mercado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Ética e transparência em todos os relacionamentos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Tradição e experiência que garantem credibilidade</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-xl text-foreground font-semibold italic">
            "Na Midas Reboques e Engates, cada carreta não é apenas um produto, mas sim um projeto desenvolvido para rodar com você, levando confiança e tranquilidade a cada viagem."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
