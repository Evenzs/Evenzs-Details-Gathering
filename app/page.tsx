import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ChallengesSection from '@/components/ChallengesSection';
import FeedbackSection from '@/components/FeedbackSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#070C1B] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ChallengesSection />
      <FeedbackSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
