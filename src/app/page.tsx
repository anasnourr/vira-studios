import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { WhyVira } from "@/components/sections/WhyVira";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider mx-auto max-w-[1480px]" />
      <About />
      <Services />
      <FeaturedExperience />
      <SelectedWork />
      <Process />
      <WhyVira />
      <Testimonials />
      <FinalCTA />
      <Contact />
    </>
  );
}
