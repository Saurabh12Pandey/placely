import { createFileRoute } from "@tanstack/react-router";
import { PricingSection } from "@/components/PricingSection";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Placely Football Recruitment" },
      { name: "description", content: "Transparent pricing plans for athletes, coaches, and schools." },
    ],
  }),
});

function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
    </div>
  );
}
