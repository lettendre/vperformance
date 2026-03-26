import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { servicesPageItems } from "@/data/content";

export function ServicesGrid() {
  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="What we do?" title="PUSH YOUR LIMITS FORWARD" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {servicesPageItems.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group block bg-dark-4 border border-dark-6 p-6 md:p-8 transition-all duration-300 hover:bg-[#363636] hover:border-accent/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-[22px] text-white font-semibold uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent text-[15px] font-semibold uppercase tracking-wide">
                    {item.tagline}
                  </p>
                </div>
                <span className="text-text-dim text-xl group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0">
                  <ChevronRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
