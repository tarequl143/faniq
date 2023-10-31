import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonial } from "./components/Testimonial";
import { OnlyFansFeatures } from "./components/OnlyfansFeature";
import { QuickFeatures } from "./components/QuickFeatures";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import { Banner } from "./components/Banner";
import { Footer } from "./Footer";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <main className="bg-[#0E0F1C]">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <OnlyFansFeatures />
      <QuickFeatures />
      <FrequentlyAskedQuestions />
      <Banner />
      <Footer />
      <div className="p-96" />
    </main>
  );
}
