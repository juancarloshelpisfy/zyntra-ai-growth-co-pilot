import { Button } from "@/components/ui/button";
import neuralHero from "@/assets/neural-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={neuralHero} 
          alt="Neural network visualization" 
          className="w-full h-full object-cover opacity-40 neural-network"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          El mercado es un caos.{" "}
          <span className="text-gradient">Zyntra</span> es tu brújula.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed fade-in fade-in-delay-1">
          La primera IA que no solo encuentra datos, sino que te revela tu próxima gran jugada: 
          el cliente que va a comprar, el socio que te hará crecer o el talento que te llevará al siguiente nivel.
        </p>

        <div className="fade-in fade-in-delay-2">
          <Button variant="hero" size="xl" className="text-lg">
            Solicitar Acceso
          </Button>
        </div>
      </div>
    </section>
  );
}