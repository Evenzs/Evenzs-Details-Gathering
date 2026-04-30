import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ChallengesSection from '@/components/ChallengesSection';
import UseCasesSection from '@/components/UseCasesSection';
import FeedbackSection from '@/components/FeedbackSection';
import CalBookingSection from '@/components/CalBookingSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#070C1B] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ChallengesSection />
      <UseCasesSection />
      <FeedbackSection />
      <CalBookingSection />
      <Footer />
    </main>
  );
}
