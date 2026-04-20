import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AIFeaturesSection } from "@/components/AIFeaturesSection";
import { HexagonMatchSection } from "@/components/HexagonMatchSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Placely — AI-Powered Football Recruitment Platform" },
      { name: "description", content: "Connecting students and schools through intelligent AI matching. Discover talent, unlock opportunities, and revolutionize football recruitment." },
      { property: "og:title", content: "Placely — AI-Powered Football Recruitment" },
      { property: "og:description", content: "The future of football recruitment. AI-powered matching, analytics, and end-to-end workflow." },
    ],
  }),
});

function Index() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <AIFeaturesSection />
      <HexagonMatchSection />
    </div>
  );
}
