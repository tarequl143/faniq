import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonial } from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <div className="p-96" />
    </main>
  );
}
