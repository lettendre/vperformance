import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Banner } from "@/components/sections/Banner";
import { Pricing } from "@/components/sections/Pricing";


export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Explore V Performance services including personal training, performance coaching, corrective exercise, and functional fitness programs designed for long-term strength, mobility, and results.",
  alternates: { canonical: "https://www.vperformance.lk/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb title="Memberships" />
      <ServicesGrid />
      <Banner
        heading="Exercise until the body obeys."
        subtitle="Where health, beauty and fitness meet."
      />
      <Pricing />
    </>
  );
}
