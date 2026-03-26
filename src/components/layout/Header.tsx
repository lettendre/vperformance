"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
          "fixed inset-0 bg-black/70 z-[999] transition-all duration-300",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 w-[300px] z-[999] bg-[#111] h-full overflow-y-auto transition-all duration-500 p-[50px_30px_30px_30px] lg:hidden",
          mobileOpen
            ? "left-0 opacity-100 visible"
            : "-left-[300px] opacity-0 invisible"
        )}
      >
        <button
          className="absolute right-5 top-5 w-[30px] h-[30px] text-white text-[22px] leading-[27px] cursor-pointer"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa fa-close" />
        </button>
        <nav className="mt-8">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3.5 text-white font-heading text-[15px] uppercase tracking-wide transition-colors hover:text-accent",
                    isActive(link.href) && "text-accent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/services"
          className="block mt-8 bg-accent text-white text-center text-sm font-semibold uppercase tracking-[0.03em] py-3.5 px-6 hover:bg-accent-hover transition-colors"
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
            <i className="fa fa-bars" />
          </button>
        </div>
      </header>
    </>
  );
}
