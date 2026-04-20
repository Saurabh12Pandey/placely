import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Placely Football Recruitment" },
      { name: "description", content: "Learn about the mission, team, and technology behind Placely's football recruitment revolution." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <FAQSection />
    </div>
  );
}
