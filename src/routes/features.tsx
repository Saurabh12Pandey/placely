import { createFileRoute } from "@tanstack/react-router";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PremiumAdvantage } from "@/components/PremiumAdvantage";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features — Placely Football Recruitment" },
      { name: "description", content: "Explore the advanced AI features and competitive advantages of the Placely platform." },
    ],
  }),
});

function FeaturesPage() {
  return (
    <div className="pt-16">
      <ComparisonSection />
      <FeaturesSection />
      <PremiumAdvantage />
    </div>
  );
}
