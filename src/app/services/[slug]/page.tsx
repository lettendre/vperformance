import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
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

  return (
    <>
      <Breadcrumb title={service.title} backgroundImage={service.image} />

      {/* Content Section */}
      <section className="bg-dark-3 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-[60px]">
            {/* Left column — Text */}
            <div className="md:w-[70%]">
              {/* Tagline */}
              <h2 className="text-white text-[26px] pb-10 md:text-[38px] font-bold uppercase leading-[1.15] mb-6">
                {service.tagline}
              </h2>

              {/* Coach & schedule */}
              {service.coach && (
                <p className="text-[#999] text-base mb-2">
                  Led by{" "}
                  <strong className="text-white font-semibold">
                    {service.coach}
                  </strong>
                  {service.title.includes("Combat") &&
                    ", founder of Soul MMA"}
                </p>
              )}
              {service.schedule && (
                <p className="text-accent text-base font-semibold mb-5">
                  {service.schedule}
                </p>
              )}

              {/* Description */}
              <div className="mb-8">
                {service.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-[#aaa] text-base leading-[1.8] mb-4 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-8">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] text-[#bbb] leading-relaxed"
                      >
                        <i className="fa fa-check text-accent text-xs mt-1.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Training formats */}
              {service.formats && (
                <p className="text-[#aaa] text-[15px] mb-8">
                  <strong className="text-white">Training formats:</strong>{" "}
                  {service.formats}
                </p>
              )}

              {/* Price block */}
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
                  <>
                    <div className="border-t border-white/10 my-10" />
                    <p className="text-accent text-[32px] md:text-[36px] font-bold leading-none tracking-tight">
                      {amount}
                    </p>
                    {extraItems.length > 0 && (
                      <p className="text-[#999] text-base mt-3">
                        {extraItems.map((item) =>
                          item.value ? `${item.label}: ${item.value}` : item.label
                        ).join(" · ")}
                      </p>
                    )}
                    {details && (
                      <p className="text-[#555] text-sm mt-2">{details}</p>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-white/10" />

            {/* Right column — Other services */}
            <div className="md:w-[25%]">
              <div className="md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto">
                <h3 className="text-white pb-5 text-lg font-semibold uppercase tracking-wide mb-5">
                  Other Services
                </h3>
                <ul className="flex flex-col gap-3">
                  {servicesPageItems
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-[#9ca3af] text-[15px] hover:text-accent transition-colors"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 text-sm"
            >
              {service.ctaText || "Get Started"}
            </Button>
            <Button
              variant="outline"
              href="/services"
              className="w-full sm:w-auto px-9 py-4 text-sm"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
