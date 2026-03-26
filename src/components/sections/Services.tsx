"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { homeServices } from "@/data/content";

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth || 340;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  // Touch swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      scroll(diff > 0 ? "right" : "left");
    }
  };

  return (
    <section id="services" className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionTitle subtitle="Our Services" title="WHAT WE OFFER" align="left" className="mb-0">
              <span className="inline-block pt-3 text-[15px] text-accent font-semibold uppercase tracking-wide">
                Not trends. A proven system.
              </span>
            </SectionTitle>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {/* Arrows */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="h-10 w-10 border border-white/10 text-white/60 flex items-center justify-center text-lg hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-default"
              aria-label="Previous"
            >
              <i className="fa fa-chevron-left" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="h-10 w-10 border border-white/10 text-white/60 flex items-center justify-center text-lg hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-default"
              aria-label="Next"
            >
              <i className="fa fa-chevron-right" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {homeServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex-shrink-0 w-[280px] md:w-[340px] overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-dark-2 p-5 flex-1 flex flex-col transition-colors duration-300 group-hover:bg-[#111]">
                <h5 className="text-base md:text-lg text-white font-semibold uppercase mb-1.5 group-hover:text-accent transition-colors">
                  {service.title}
                </h5>
                <span className="text-[#888] text-[14px] leading-relaxed">
                  {service.description}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button variant="outline" href="/services">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
