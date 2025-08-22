import { FileSpreadsheet, Search, TrendingDown, Zap, Target, TrendingUp } from "lucide-react";

export function ShiftSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué adivinar cuando puedes{" "}
            <span className="text-gradient">saber</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* El Mundo de Ayer */}
          <div className="text-center">
            <div className="mb-8 space-y-6">
              <div className="flex justify-center space-x-4 opacity-40">
                <FileSpreadsheet className="w-12 h-12 text-muted-foreground" />
                <Search className="w-12 h-12 text-muted-foreground" />
                <TrendingDown className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
              Prospección Manual
            </h3>
            <p className="text-lg text-muted-foreground/80">
              Horas perdidas. Oportunidades ignoradas. Crecimiento impredecible.
            </p>
          </div>

          {/* El Mundo con Zyntra */}
          <div className="text-center">
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="p-6 rounded-full bg-gradient-to-r from-electric-cyan/20 to-neon-magenta/20 border border-primary/30 neon-glow">
                  <Zap className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 glow-text">
              Inteligencia Autónoma
            </h3>
            <p className="text-lg text-foreground">
              Oportunidades validadas. Entregadas al instante.{" "}
              <span className="text-gradient font-semibold">Crecimiento exponencial.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}