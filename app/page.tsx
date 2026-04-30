import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ChallengesSection from '@/components/ChallengesSection';
import ImageStrip from '@/components/ImageStrip';
import UseCasesSection from '@/components/UseCasesSection';
import TrustSection from '@/components/TrustSection';
import FeedbackSection from '@/components/FeedbackSection';
import CalBookingSection from '@/components/CalBookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#070C1B] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <ImageStrip />
      <UseCasesSection />
      <TrustSection />
      <FeedbackSection />
      <CalBookingSection />
      <Footer />
    </main>
  );
}
