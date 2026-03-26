import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative">
      <div
        className="h-screen min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat max-md:text-center"
        style={{ backgroundImage: "url('/images/hero/hero-1.jpg')" }}
      >
        <div className="container mx-auto px-4 relative z-[2]">
          <div className="flex justify-end">
            <div className="w-full lg:w-1/2 md:w-2/3">
              <div>
                <h1 className="text-[64px] xl:text-[64px] lg:text-[52px] md:text-[42px] max-[480px]:text-[36px] font-extrabold text-white leading-[1.1] mb-6">
                  WELCOME TO <br />
                  <strong className="text-accent">V PERFORMANCE</strong>
                </h1>
                <p className="text-lg text-white mb-10 max-w-[500px] leading-[1.75] max-md:mx-auto max-md:text-base">
                  V Performance is built on 10+ years of studying human movement,
                  world-class certifications, and hands-on experience coaching over
                  500 clients and athletes across all ages and goals.
                </p>
                <Button href="#services">What We Offer</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
