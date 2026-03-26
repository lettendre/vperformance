import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { Services } from "@/components/sections/Services";
import { Banner } from "@/components/sections/Banner";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { TeamSlider } from "@/components/sections/TeamSlider";

import { homeTeamMembers } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Certifications />
      <Services />
      <Banner
        heading="Where fitness goes far beyond lifting weights"
        buttonText="ABOUT US"
        buttonHref="/about"
      />
      <Pricing />
      <div className="hidden md:block">
        <Gallery />
      </div>
      <TeamSlider members={homeTeamMembers} />
    </>
  );
}
