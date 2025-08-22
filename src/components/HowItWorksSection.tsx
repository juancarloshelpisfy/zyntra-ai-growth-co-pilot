import { Target, Cpu, Sparkles } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Target,
      title: "Conecta tu Objetivo",
      description: "Define qué es para ti una oportunidad de oro (perfil de cliente, partner o candidato ideal)."
    },
    {
      icon: Cpu,
      title: "Libera a Zyntra",
      description: "Nuestra IA escanea el universo digital, conectando millones de puntos de datos en tiempo real."
    },
    {
      icon: Sparkles,
      title: "Recibe Oportunidades",
      description: "Insights y contactos cualificados aparecen directamente en tu CRM. Listos para la acción."
    }
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            La magia es compleja.{" "}
            <span className="text-gradient">El proceso, no.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-electric-cyan to-neon-magenta flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary/20 border border-border/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}