"use client";

import { useState, useEffect, useCallback } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];

  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Testimonial" title="Our client say" />
        <div className="relative max-w-3xl mx-auto">
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[46px] w-[46px] text-text-dim bg-white/10 text-2xl hover:bg-accent hover:text-white transition-colors z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <i className="fa fa-angle-left" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[46px] w-[46px] text-text-dim bg-white/10 text-2xl hover:bg-accent hover:text-white transition-colors z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <i className="fa fa-angle-right" />
          </button>

          <div className="text-center px-16">
            <p className="text-white text-base tracking-wide mb-6 leading-[1.75] max-w-[65ch] mx-auto">
              {item.text}
            </p>
            <p className="text-white font-semibold uppercase mb-2 font-heading text-lg">
              {item.name}
            </p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <i key={i} className="fa fa-star text-xs text-star" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
