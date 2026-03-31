import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero/hero-1.avif')" }}
    >
      {/* Dark overlay + bottom gradient for depth */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 py-32 md:py-40 max-w-[800px] mx-auto">
        <span className="inline-block text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-6">
          Performance-Driven Training
        </span>

        <h1 className="text-[44px] md:text-[60px] lg:text-[76px] font-extrabold text-white leading-[1.02] tracking-[-0.02em] mb-6">
          Train Smarter.
          <br />
          <span className="text-accent">Move Better.</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg font-light leading-[1.8] mb-12 max-w-[520px] mx-auto">
          Built on 10+ years of movement science, world-class certifications,
          and hands-on experience coaching over 500 clients and athletes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#services">Train With Us</Button>
          <Button variant="outline" href="/contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
