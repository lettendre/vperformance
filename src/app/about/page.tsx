import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { AboutText } from "@/components/sections/AboutText";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamSlider } from "@/components/sections/TeamSlider";
import { Banner } from "@/components/sections/Banner";
import { Testimonials } from "@/components/sections/Testimonials";

import { homeTeamMembers } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the V Training Method; a performance-focused approach built on science, precision, and long-term human health. Discover the philosophy behind V Performance and our coaching system.",
  alternates: { canonical: "https://www.vperformance.lk/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" />
      <AboutText />
      <WhyChooseUs />
      <TeamSlider members={homeTeamMembers} />
      <Banner
        heading="Ready to move better?"
        subtitle="Start your journey with V Performance today."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
      <Testimonials />
    </>
  );
}
