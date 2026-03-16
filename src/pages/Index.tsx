import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyListenSection from "@/components/WhyListenSection";
import LivePlayer from "@/components/LivePlayer";
import AboutSection from "@/components/AboutSection";
import ContentCards from "@/components/ContentCards";
import QuoteBanner from "@/components/QuoteBanner";
import ArtistsSection from "@/components/ArtistsSection";
import AppDownload from "@/components/AppDownload";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyListenSection />
      <LivePlayer />
      <AboutSection />
      <ContentCards />
      <QuoteBanner />
      <ArtistsSection />
      <AppDownload />
      <InstagramSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
