import Mission from "@/components/home/Mission";
import AboutSection from "@/components/home/AboutSection";

export const metadata = {
  title: "About Uday Aluminium - Mission, Vision & Values",
  description:
    "Learn about Uday Aluminium's mission to deliver high-quality aluminium products, our vision for the future, and the core values that guide our company.",
  keywords: "about uday aluminium, mission, vision, values, company",
};

export default function About() {
  return (
    <>
      <div className="pt-8 sm:pt-12">
        <Mission />
      </div>
      <AboutSection />
    </>
  );
}
