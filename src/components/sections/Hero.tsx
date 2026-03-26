import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-dark-1 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/breadcrumb-bg.avif')" }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-4 w-full py-32 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Left — Content */}
            <div className="md:w-1/2">
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Performance-Driven Training
              </span>

              <h1 className="text-[42px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                Train Smarter.
                <br />
                <span className="text-accent">Move Better.</span>
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-[1.75] mb-10 max-w-[460px]">
                Built on 10+ years of movement science, world-class certifications,
                and hands-on experience coaching over 500 clients and athletes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#services">View Services</Button>
                <Button variant="outline" href="/contact">Get in Touch</Button>
              </div>
            </div>

            {/* Right — Image */}
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/hero/hero-1.avif"
                  alt="V Performance Training"
                  width={800}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-[400px] md:h-[520px] lg:h-[600px] object-cover rounded-lg"
                  priority
                  fetchPriority="high"
                />
                {/* Accent border detail */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-lg -z-10 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
