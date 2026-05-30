import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VideoSection } from "@/components/video-section";
import { GamesSection } from "@/components/games-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <AboutSection />
      <GamesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
