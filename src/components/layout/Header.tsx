"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/content";

const mainLinks = navLinks.filter((l) => l.href !== "/services");

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setHidden(false);
      }
      if (current > lastScroll.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 z-[10000] transition-all duration-300",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[10001] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-400 lg:hidden",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Close button */}
        <button
          className="absolute right-6 top-6 w-10 h-10 text-white/60 text-2xl hover:text-white transition-colors cursor-pointer"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="V Performance"
              width={120}
              height={30}
              sizes="120px"
              className="h-[28px] w-auto"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-white/80 font-heading text-xl uppercase tracking-[0.08em] transition-colors hover:text-accent",
                    isActive(link.href) && "text-accent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="/services"
          className="mt-10 bg-accent text-white text-sm font-semibold uppercase tracking-[0.03em] py-3.5 px-10 hover:bg-accent-hover transition-colors"
        >
          View Services
        </Link>
      </div>

      {/* Header */}
      <header
        className={cn(
          "fixed left-0 top-0 w-full px-[15px] py-5 z-[9999] transition-all duration-300",
          scrolled
            ? "bg-black/90 backdrop-blur-sm"
            : "pt-[55px]",
          hidden && scrolled && "-translate-y-[120%]"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="V Performance"
                width={140}
                height={35}
                sizes="140px"
                className="h-[32px] w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav + CTA */}
          <div className="hidden lg:flex items-center gap-10">
            <nav>
              <ul className="flex items-center gap-8">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative block text-white/80 text-[14px] font-medium uppercase tracking-[0.06em] font-heading py-2 transition-all duration-300 hover:text-white",
                        isActive(link.href) && "text-white"
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute left-0 -bottom-0.5 h-[2px] bg-accent transition-all duration-300",
                          isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/services"
              className="bg-accent text-white text-[13px] font-semibold uppercase tracking-[0.04em] px-6 py-2.5 hover:bg-accent-hover transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-[30px] h-[30px] text-white text-[22px] leading-[29px] cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
    </>
  );
}
