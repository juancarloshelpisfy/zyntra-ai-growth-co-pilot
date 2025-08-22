import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Deja de perseguir.{" "}
            <span className="text-gradient">Empieza a atraer.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            El crecimiento no es cuestión de más esfuerzo, sino de mejor inteligencia. 
            Zyntra es esa inteligencia. Estamos abriendo el acceso a un número limitado de equipos visionarios.{" "}
            <span className="text-foreground font-semibold">Sé uno de ellos.</span>
          </p>

          <div className="mb-8">
            <Button variant="hero" size="xl" className="text-lg px-12">
              Solicitar Acceso a la Beta Privada
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/80">
            Equipos de alto rendimiento. Resultados exponenciales.
          </p>
        </div>

        {/* Ambient Background Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}