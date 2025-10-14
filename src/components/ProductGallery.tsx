import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import midia1 from "@/assets/midia_1.png";
import midia2 from "@/assets/midia_2.png";
import midia3 from "@/assets/midia_3.png";
import midia4 from "@/assets/midia_4.png";
import midia5 from "@/assets/midia_5.png";
import midia6 from "@/assets/midia_6.png";
import midia7 from "@/assets/midia_7.png";

const images = [
  { src: midia1, alt: "Carreta para Jet Ski" },
  { src: midia2, alt: "Carreta Duplo Eixo" },
  { src: midia3, alt: "Engate para BMW X1" },
  { src: midia4, alt: "Engate para Pajero TR4" },
  { src: midia5, alt: "Carreta para Moto" },
  { src: midia6, alt: "Carreta Baú Midas" },
  { src: midia7, alt: "Carreta Graneleira" },
];

const ProductGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos produtos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos nossos trabalhos em carretas e engates personalizados
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
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className="cursor-pointer group overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-300"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <CardContent className="p-0 aspect-square relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-0">
          <div className="relative">
            <img
              src={selectedImage || ""}
              alt="Imagem expandida"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductGallery;
