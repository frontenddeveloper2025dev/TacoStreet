import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PromotionSection from "@/components/promotion-section";
import MenuSection from "@/components/menu-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PromotionSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
