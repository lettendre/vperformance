import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { servicesPageItems } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesPageItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesPageItems.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
    alternates: {
      canonical: `https://www.vperformance.lk/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesPageItems.find((s) => s.slug === slug);

  if (!service) notFound();

  const paragraphs = service.description.split("\n\n");
  const leadParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  return (
    <>
      {/* ── 1. Header ── */}
      <section className="bg-dark-1 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="max-w-[900px] mx-auto px-6 md:px-4 text-center">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Our Services
          </span>
          <h1 className="text-white text-[34px] md:text-[48px] lg:text-[56px] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] mb-5">
            {service.title}
          </h1>
          <p className="text-white/40 text-base md:text-lg font-light max-w-[560px] mx-auto">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── 2. Featured Image ── */}
      <div className="bg-dark-1 pb-10 md:pb-16">
        <div className="max-w-[900px] mx-auto px-6 md:px-4">
          <div className="relative rounded-lg overflow-hidden border border-white/[0.06] aspect-[16/9]">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── 3. Body Content ── */}
      <section className="bg-dark-3 py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-4">

          {/* Coach callout */}
          {service.coach && (
            <div className="border-l-2 border-accent pl-5 mb-10">
              <p className="text-white/50 text-sm uppercase tracking-[0.15em] mb-1">
                Coach
              </p>
              <p className="text-white text-lg font-semibold">
                {service.coach}
                {service.title.includes("Combat") && (
                  <span className="text-white/40 font-normal">{" "}— Founder, Soul MMA</span>
                )}
              </p>
              {service.schedule && (
                <p className="text-accent text-sm font-semibold mt-1">
                  {service.schedule}
                </p>
              )}
            </div>
          )}

          {/* Lead paragraph */}
          <p className="text-[#bbb] text-lg md:text-xl leading-[1.8] mb-6">
            {leadParagraph}
          </p>

          {/* Remaining paragraphs */}
          {restParagraphs.length > 0 && (
            <div className="mb-10">
              {restParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[#999] text-base leading-[1.85] mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="mt-10 mb-10">
              <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
                What You Get
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-dark-2 rounded-lg px-5 py-4 border border-white/[0.04]"
                  >
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-accent/15 shrink-0">
                      <Check size={12} className="text-accent" />
                    </span>
                    <span className="text-[#bbb] text-[15px] leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Training formats */}
          {service.formats && (
            <div className="bg-dark-2 rounded-lg border border-white/[0.04] px-6 py-5 mb-10">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Training Formats
              </p>
              <p className="text-white text-base font-medium">
                {service.formats}
              </p>
            </div>
          )}

          {/* Price / Schedule / Key Info Block */}
          {service.price && (() => {
            const mainPart = service.price.split("|")[0].trim();
            const extras = service.price.includes("|")
              ? service.price.split("|").slice(1).map((s) => s.trim())
              : [];

            const priceMatch = mainPart.match(
              /^(LKR\s[\d,]+)\s*\/?\s*(.*)?$/
            );
            const amount = priceMatch?.[1] || mainPart;
            const details = priceMatch?.[2]
              ?.replace(/[()]/g, "")
              .trim();

            const extraItems = extras.map((e) => {
              const parts = e.split(":");
              return {
                label: parts[0]?.trim() || e,
                value: parts[1]?.trim() || "",
              };
            });

            return (
              <div className="bg-dark-2 rounded-lg border border-white/[0.04] px-6 py-6 md:px-8 md:py-8 mb-10">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Pricing
                </p>
                <p className="text-accent text-[30px] md:text-[36px] font-bold leading-none tracking-tight">
                  {amount}
                </p>
                {details && (
                  <p className="text-white/35 text-sm mt-2">{details}</p>
                )}
                {extraItems.length > 0 && (
                  <p className="text-[#999] text-sm mt-3">
                    {extraItems
                      .map((item) =>
                        item.value
                          ? `${item.label}: ${item.value}`
                          : item.label
                      )
                      .join(" · ")}
                  </p>
                )}
              </div>
            );
          })()}

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-start gap-4">
            <Button href={service.ctaHref || "/contact"} className="px-10 py-4">
              {service.ctaText || "Get Started"}
            </Button>
            <Button variant="outline" href="/services" className="px-10 py-4">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ── Sidebar: Other Services ── */}
      <section className="bg-dark-2 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6 md:px-4">
          <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-6">
            Other Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {servicesPageItems
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block bg-dark-3 rounded-lg px-4 py-3.5 text-[#9ca3af] text-[14px] hover:text-accent hover:border-accent/20 border border-white/[0.04] transition-colors"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section
        className="relative py-20 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/banner-bg.avif')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-[700px] mx-auto px-6 md:px-4 text-center">
          <h2 className="text-white text-[26px] md:text-[42px] font-bold uppercase leading-tight mb-4">
            Take the First Step
          </h2>
          <p className="text-[#bbb] text-base md:text-lg leading-relaxed mb-10">
            Book your initial assessment and get a program built around you.
          </p>
          <Button
            variant="primary"
            href="/contact"
            className="px-9 py-4 text-sm"
          >
            {service.ctaText || "Get Started"}
          </Button>
        </div>
      </section>
    </>
  );
}
