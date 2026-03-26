"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TeamMember } from "@/types";

interface TeamSliderProps {
  members: TeamMember[];
  showButton?: boolean;
}

export function TeamSlider({ members, showButton = true }: TeamSliderProps) {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 992) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, members.length - itemsPerView);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  // Touch swipe support
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
      if (diff > 0) next();
      else prev();
    }
  };

  const visibleMembers = members.slice(current, current + itemsPerView);

  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <SectionTitle
            subtitle="Our Team"
            title="TRAIN WITH EXPERTS"
            align="left"
            className="mb-0"
          />
          {showButton && (
            <Button variant="outline" href="/contact" className="mt-4 sm:mt-0">
              Get in Touch
            </Button>
          )}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleMembers.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="team-card h-[450px] relative overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${member.image}')` }}
            >
              <div className="team-card-overlay">
                <h3 className="text-white text-lg font-semibold mb-3 block">
                  {member.name}
                </h3>
                <span className="block text-[11px] font-semibold text-[#aaa] uppercase tracking-[0.12em]">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 w-5 -skew-y-[5deg] transition-colors ${
                i === current ? "bg-accent" : "bg-[#5c5c5c]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
