import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemAnimation from '@/components/ProblemAnimation';
import ChallengesSection from '@/components/ChallengesSection';
import ImageStrip from '@/components/ImageStrip';
import UseCasesSection from '@/components/UseCasesSection';
import TrustSection from '@/components/TrustSection';
import CalBookingSection from '@/components/CalBookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#070C1B] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemAnimation />
      <ChallengesSection />
      <ImageStrip />
      <UseCasesSection />
      <TrustSection />
      <CalBookingSection />
      <Footer />
    </main>
  );
}
