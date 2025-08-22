import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ShiftSection } from "@/components/ShiftSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SuperpowersSection } from "@/components/SuperpowersSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SocialProof />
      <ShiftSection />
      <HowItWorksSection />
      <SuperpowersSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
