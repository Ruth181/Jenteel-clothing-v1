import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ReviewsSection } from "@/components/sections/review-section";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
      <div>
        <HeroSection/>
        <AboutSection/>
        <GallerySection/>
        <ServicesSection/>
        <ReviewsSection/>
        <ContactSection/>
        <Footer/>
      </div>
  );
}
