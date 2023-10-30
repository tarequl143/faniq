import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonial } from "./components/Testimonial";
import { OnlyFansFeatures } from "./components/OnlyfansFeature";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <OnlyFansFeatures />
      <div className="p-96" />
    </main>
  );
}
