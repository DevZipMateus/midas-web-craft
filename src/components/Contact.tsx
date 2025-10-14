import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Entre em contato
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e encontrar a melhor solução para suas necessidades
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Telefone</h3>
                    <a
                      href="https://wa.me/5517991810942"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      (17) 99181-0942
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">E-mail</h3>
                    <a
                      href="mailto:midasreboques@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 break-all"
                    >
                      midasreboques@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Danilo Galeazzi, 3316<br />
                      Jardim João Paulo II<br />
                      CEP 15051-155<br />
                      São José do Rio Preto - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário e Redes Sociais */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Horário de funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a sexta<br />
                      08:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-foreground">Redes sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/midasreboques/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </a>
                  <a
                    href="https://www.facebook.com/midasreboques"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </a>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Atendimento personalizado</h3>
                <p className="text-muted-foreground mb-4">
                  Entre em contato conosco e receba um atendimento personalizado para encontrar a solução ideal para você.
                </p>
                <a
                  href="https://wa.me/5517991810942"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone size={18} />
                  Fale conosco pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
