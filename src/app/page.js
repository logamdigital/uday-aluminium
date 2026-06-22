import HeroSlider from "@/components/home/HeroSlider";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import Certifications from "@/components/home/Certifications";
import ContactForm from "@/components/home/ContactForm";
import Mission from "@/components/home/Mission";
import Message from "@/components/home/Message";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ProductsShowcase />
      <WhyChooseUs />
      <AboutSection />
      <Mission />
      <Message />
      <Certifications />
      <ContactForm />
    </>
  );
}
