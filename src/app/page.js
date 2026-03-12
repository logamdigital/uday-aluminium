import HeroSlider from "@/components/home/HeroSlider";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import Certifications from "@/components/home/Certifications";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ProductsShowcase />
      <WhyChooseUs />
      <AboutSection />
      <Certifications />
      <ContactForm />
    </>
  );
}
