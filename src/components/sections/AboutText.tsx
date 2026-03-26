"use client";

import { useRef, useState } from "react";

export function AboutText() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <section className="bg-dark-1 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-4">
        {/* Two-column: text + video */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:w-[55%]">
            <span className="text-xs text-accent uppercase font-semibold tracking-[0.15em]">
              About Us
            </span>
            <h2 className="text-white text-[28px] md:text-[38px] font-bold uppercase mt-3 mb-8 tracking-tight leading-[1.15]">
              Introducing Movement
              <br />
              Into People&apos;s Lives
            </h2>

            <p className="text-[#aaa] text-base leading-[1.8] mb-5 max-w-[60ch]">
              V Performance is built on over a decade of studying human movement,
              world-class certifications, and hands-on coaching experience with more
              than 500 clients and athletes across all ages and goals.
            </p>
            <p className="text-[#aaa] text-base leading-[1.8] mb-5 max-w-[60ch]">
              Our foundation blends injury rehabilitation, human performance science,
              brain-body connection research, and functional movement principles —
              guiding everyone from 13-year-old aspiring athletes to an inspiring
              81-year-young client training to walk confidently into her next decade.
            </p>
            <p className="text-white text-lg font-semibold leading-snug mb-5 max-w-[60ch]">
              Here, you don&apos;t just train.
              <br />
              You learn, grow, and evolve — physically and mentally.
            </p>
            <p className="text-[#aaa] text-base leading-[1.8] max-w-[60ch]">
              Founded by Ashan Vimuktha, V Performance was created after years of
              deep learning, real-world coaching, and continuous refinement. From that
              journey emerged something truly unique — The V Training Method. We train
              the individual in front of us: their body, their goals, and their journey.
            </p>
          </div>

          {/* Right — Video */}
          <div className="lg:w-[45%] w-full">
            <div className="relative rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src="/aboutus/v-performance.mp4"
                className="w-full h-[300px] md:h-[450px] lg:h-[520px] object-cover"
                controls={playing}
                onPause={handlePause}
                onEnded={handlePause}
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/30"
                >
                  <span className="inline-flex h-[70px] w-[70px] items-center justify-center bg-accent rounded-full text-4xl text-white hover:scale-110 transition-transform">
                    <i className="fa fa-caret-right" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
          {[
            { number: "500+", label: "Clients Coached" },
            { number: "10+", label: "Years Experience" },
            { number: "13–84", label: "Age Range" },
            { number: "7", label: "Days a Week" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-accent text-[36px] md:text-[44px] font-bold leading-none tracking-tight mb-2">
                {stat.number}
              </p>
              <p className="text-[#666] text-sm uppercase tracking-wide mb-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
