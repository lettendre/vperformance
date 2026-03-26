import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact V Performance for personalised training, functional fitness coaching, and performance programmes in Sri Lanka. Start your fitness journey today!",
  alternates: { canonical: "https://www.vperformance.lk/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <ContactSection />
    </>
  );
}
