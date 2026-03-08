import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </div>
  );
}
