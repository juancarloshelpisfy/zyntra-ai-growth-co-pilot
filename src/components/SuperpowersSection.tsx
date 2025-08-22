import { Eye, Zap, Workflow } from "lucide-react";
import { useState } from "react";

export function SuperpowersSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const superpowers = [
    {
      icon: Eye,
      title: "Visión de Rayos-X",
      description: "Ve más allá de un cargo o una web. Entiende la compatibilidad real, las necesidades ocultas y las señales de intención antes que nadie."
    },
    {
      icon: Zap,
      title: "Cualificación Autónoma", 
      description: "Deja de filtrar. Recibe un flujo constante de oportunidades con un \"score\" de afinidad del 99%. Tu equipo solo hablará con los ganadores."
    },
    {
      icon: Workflow,
      title: "Workflow Inteligente",
      description: "Zyntra no es otro dashboard. Es una capa de inteligencia que se integra de forma nativa en las herramientas que ya usas. Cero fricción."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Desbloquea tus nuevos{" "}
            <span className="text-gradient">superpoderes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {superpowers.map((power, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm transition-all duration-500 card-hover cursor-pointer group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <power.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 glow-text">
                {power.title}
              </h3>

              {/* Description */}
              <div className={`transition-all duration-500 ${
                activeCard === index 
                  ? 'opacity-100 max-h-40' 
                  : 'opacity-70 max-h-20 overflow-hidden'
              }`}>
                <p className="text-muted-foreground leading-relaxed">
                  {power.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                activeCard === index 
                  ? 'opacity-100 shadow-[0_0_30px_hsl(var(--primary)/0.3)]' 
                  : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}