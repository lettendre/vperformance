"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const trainingLinks = [
  { label: "Personal Training", href: "/services/personal-training" },
  { label: "Youth Fitness", href: "/services/youth-fitness" },
  { label: "Adult Fitness", href: "/services/adult-fitness" },
  { label: "Senior Fitness", href: "/services/senior-fitness" },
  { label: "Injury Rehabilitation", href: "/services/injury-rehabilitation" },
  { label: "Pre & Postnatal Fitness", href: "/services/pre-postnatal-fitness" },
  { label: "Boxing & Combat Sports", href: "/services/boxing-combat-sports" },
  { label: "Dance Classes", href: "/services/commercial-dance" },
  { label: "Breathwork", href: "/services/breathwork" },
  { label: "Corporate Fitness", href: "/services/corporate-group-fitness" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Coaches", href: "/team" },
  { label: "Packages & Pricing", href: "/services#pricing" },
  { label: "Contact Us", href: "/contact" },
];

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3"
      >
        <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.15em] font-heading">
          {title}
        </span>
        <i
          className={`fa fa-chevron-down text-text-dim text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const linkList = (
    links: { label: string; href: string }[],
  ) => (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-[#aaa] text-[13px] hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-[#0a0a0a] border-t border-accent/20">
      <div className="container mx-auto px-6 sm:px-4">
        {/* Main grid */}
        <div className="pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="V Performance"
                width={140}
                height={35}
                sizes="140px"
                className="h-[32px] w-auto mb-4"
              />
            </Link>
            <p className="text-[#999] text-[13px] leading-relaxed text-center sm:text-left max-w-[260px] mb-5">
              Premium coaching. Real results.
              <br />
              Built on movement science, delivered with precision.
            </p>
            <a
              href="https://www.instagram.com/vperformance3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-accent text-sm hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
          </div>

          {/* Column 2 — Training (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-3">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Training
            </span>
            {linkList(trainingLinks)}
          </div>

          {/* Column 2 — Training (mobile accordion) */}
          <FooterAccordion title="Training">
            {linkList(trainingLinks)}
          </FooterAccordion>

          {/* Column 3 — Company (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-2">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Company
            </span>
            {linkList(companyLinks)}
          </div>

          {/* Column 3 — Company (mobile accordion) */}
          <FooterAccordion title="Company">
            {linkList(companyLinks)}
          </FooterAccordion>

          {/* Column 4 — Visit Us (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-4">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Visit Us
            </span>
            <VisitUsContent />
          </div>

          {/* Column 4 — Visit Us (mobile accordion) */}
          <FooterAccordion title="Visit Us">
            <VisitUsContent />
          </FooterAccordion>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#888] text-xs tracking-wide text-center sm:text-left">
            &copy; {year} V Performance. All rights reserved.
          </p>
          <p className="text-[#888] text-xs tracking-wide">
            Made with Intention by{" "}
            <a
              href="https://www.deeesignlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Deeesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function VisitUsContent() {
  return (
    <div className="space-y-4">
      {/* Address */}
      <p className="text-[#888] text-[13px] leading-relaxed">
        2 Andarewatta Rd,
        <br />
        Colombo 00600, Sri Lanka
      </p>

      {/* Phone */}
      <a
        href="tel:+94777548505"
        className="block text-[#aaa] text-[13px] hover:text-accent transition-colors"
      >
        +94 77 754 8505
      </a>

      {/* Hours */}
      <div className="text-[#aaa] text-[13px] leading-relaxed">
        <p className="mb-1">
          <span className="text-[#ccc]">Morning:</span> 5:30 AM – 12:30 PM
        </p>
        <p className="mb-1">
          <span className="text-[#ccc]">Afternoon:</span> 3:30 PM – 7:30 PM
        </p>
        <p className="text-[#888] text-[11px] uppercase tracking-wide mt-2 mb-0">
          Open 7 days a week
        </p>
      </div>

      {/* Directions */}
      <a
        href="https://maps.google.com/?q=6.8863452152126765,79.87899885178108"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-accent text-[13px] font-semibold hover:text-white transition-colors min-h-[44px] leading-[44px]"
      >
        Get Directions →
      </a>
    </div>
  );
}
