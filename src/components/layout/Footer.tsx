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

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

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
                sizes="(max-width: 640px) 100px, 140px"
                quality={85}
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.958c.453.453.78.898.958 1.47.163.46.349 1.26.404 2.43.058 1.266.069 1.646.069 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.958 1.47 4.088 4.088 0 01-1.47.958c-.46.163-1.26.349-2.43.404-1.266.058-1.646.069-4.85.069s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.958 4.088 4.088 0 01-.958-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.958-1.47 4.088 4.088 0 011.47-.958c.46-.163 1.26-.349 2.43-.404C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.278.261 2.15.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.15-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.763.499-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.059-1.278-.261-2.15-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.097.333 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

          {/* Column 2 — Training (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-3">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Training
            </span>
            {linkList(trainingLinks)}
          </div>


          {/* Column 3 — Navigation (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-2">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Navigation
            </span>
            {linkList(navigationLinks)}
          </div>

          {/* Column 3 — Navigation (mobile) */}
          <div className="sm:hidden text-center">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 font-heading">
              Navigation
            </span>
            {linkList(navigationLinks)}
          </div>

          {/* Column 4 — Visit Us (desktop/tablet) */}
          <div className="hidden sm:block lg:col-span-4">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 font-heading">
              Visit Us
            </span>
            <VisitUsContent />
          </div>

          {/* Column 4 — Visit Us (mobile) */}
          <div className="sm:hidden text-center">
            <span className="block text-accent text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 font-heading">
              Visit Us
            </span>
            <VisitUsContent />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9ca3af] text-xs tracking-wide text-center sm:text-left">
            &copy; {year} V Performance. All rights reserved.
          </p>
          <p className="text-[#9ca3af] text-xs tracking-wide">
            Made with Intention by{" "}
            <a
              href="https://www.deeesignlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4db8e0] hover:text-white transition-colors"
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
      <p className="text-[#9ca3af] text-[13px] leading-relaxed">
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
        <p className="text-[#9ca3af] text-[11px] uppercase tracking-wide mt-2 mb-0">
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
