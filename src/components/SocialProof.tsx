export function SocialProof() {
  const companies = [
    { name: "Vercel", logo: "V" },
    { name: "Stripe", logo: "S" },
    { name: "Notion", logo: "N" },
    { name: "Brex", logo: "B" },
    { name: "Linear", logo: "L" },
    { name: "Figma", logo: "F" }
  ];

  return (
    <section className="py-20 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            El futuro del crecimiento, validado por los{" "}
            <span className="glow-text">líderes del sector</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-secondary/20 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30"
            >
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}