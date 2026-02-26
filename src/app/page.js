import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Certifications from "@/components/home/Certifications";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhyChooseUs />
      <ProductsShowcase />
      <Certifications />
      <ContactForm />
    </>
  );
}
