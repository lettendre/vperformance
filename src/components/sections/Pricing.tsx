import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/content";

export function Pricing() {
  return (
    <section className="bg-dark-2 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs text-accent uppercase font-semibold tracking-[0.15em]">
            Pricing
          </span>
          <h2 className="text-white text-[28px] md:text-[38px] font-bold uppercase mt-3 tracking-tight">
            Invest In Your Health
          </h2>
          <p className="text-[#9ca3af] text-base mt-4 max-w-md mx-auto">
            Transparent pricing. No hidden fees. Every plan starts with an assessment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative bg-dark-3 border rounded-lg p-8 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-accent/40 ring-1 ring-accent/20"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a6e8e] text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Name */}
              <h3 className="text-white text-lg font-bold mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <p className="text-accent text-[36px] font-bold leading-none tracking-tight mb-1">
                  {plan.price}
                </p>
                <p className="text-[#9ca3af] text-sm mb-0">
                  {plan.period}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[14px] text-[#aaa] list-none leading-snug"
                  >
                    <Check size={12} className="text-accent mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "primary" : "outline"}
                href="/contact"
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" href="/services">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
