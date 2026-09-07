import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { SignatureSection } from './sections/SignatureSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CheeseMomentSection } from './sections/CheeseMomentSection';
import { ShowcaseSection } from './sections/ShowcaseSection';
import { LocationSection } from './sections/LocationSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1E1E1E] flex flex-col selection:bg-[#E23E28]/15 selection:text-[#B32310]">
      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Full-width Hero with striking photorealistic pizza image */}
        <HeroSection />

        {/* The Craving Starts Here (Signature Food Section) */}
        <SignatureSection />

        {/* From Oven To Slice (3-Stage Experience) */}
        <ExperienceSection />

        {/* One Slice Is Never Enough (Cheese Pull Moment) */}
        <CheeseMomentSection />

        {/* What Are You Craving? (Food Showcase) */}
        <ShowcaseSection />

        {/* Meet Us in G-13 (Local G-13 Section) */}
        <LocationSection />

        {/* Your Pizza Craving Can't Wait (Final CTA) */}
        <FinalCtaSection />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
