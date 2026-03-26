import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/content";

export function Pricing() {
  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Our Plan" title="Choose your pricing plan" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="skew-card relative text-center p-[40px_30px_52px] border border-dark-6 transition-all duration-500 mb-[30px]"
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-popular text-white text-xs font-semibold px-3.5 py-1.5 rounded-full z-10 whitespace-nowrap shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-[24px] md:text-[28px] text-white font-bold mb-4 unskew">
                {plan.name}
              </h3>
              <div className="mb-[30px] unskew plan-price">
                <h2 className="text-[50px] text-accent font-semibold">
                  {plan.price}
                </h2>
                <span className="text-text-muted text-sm font-semibold uppercase tracking-wide">
                  {plan.period}
                </span>
              </div>
              <ul className="mb-10 unskew">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-text-muted leading-[2.2] list-none"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="pricing" href="/contact">
                Enroll now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
