import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adilson Lopes",
    text: "Esqueci de te falar. Mas parabéns pelo serviço, trabalho de qualidade. Que Deus continue te abençoando. Parabéns mesmo. Fiquei 100% satisfeito com o seu trabalho. Dê os parabéns para toda a equipe aí!",
    role: "Cliente"
  },
  {
    name: "Pedro Luciano",
    text: "Boa tarde, obrigado pelo atendimento e os produtos de ótima qualidade. Super recomendo!!",
    role: "Cliente Midas Reboques"
  },
  {
    name: "Guia de Pesca",
    username: "@vardironpescadoguiadepesca",
    text: "Quero agradecer pela carretinha. Fiquei impressionado com a qualidade e capricho do produto. Vocês mandaram muito bem! Como guia de pesca, ter uma carreta de confiança faz toda a diferença. Estou tranquilo e satisfeito com a segurança que ela transmite. Parabéns pelo excelente trabalho.",
    role: "Cliente"
  },
  {
    name: "Pedro Melo",
    text: "É muito fácil comentar de quem tem valor, comprador dos seus deveres, prazo de entrega com uma das melhores. Só tenho a falar muito bem. Obrigado pela confiança e parabéns pelo investimento!",
    role: "Cliente Satisfeito"
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Depoimentos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nossos produtos e serviços
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-10 h-10 text-accent mb-4" />
                      <p className="text-foreground mb-6 flex-grow italic">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-accent/20 pt-4">
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        {testimonial.username && (
                          <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                        )}
                        <p className="text-sm text-accent">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-accent/60 hover:bg-accent hover:text-accent-foreground" />
          <CarouselNext className="border-accent/60 hover:bg-accent hover:text-accent-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
