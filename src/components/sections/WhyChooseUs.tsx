import { chooseUsItems } from "@/data/content";

export function WhyChooseUs() {
  return (
    <section className="bg-dark-2 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs text-accent uppercase font-semibold tracking-[0.15em]">
            Why Choose V Performance?
          </span>
          <h2 className="text-white text-[28px] md:text-[38px] font-bold uppercase mt-3 tracking-tight">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chooseUsItems.map((item) => (
            <div
              key={item.title}
              className="group bg-dark-3 border border-white/5 rounded-lg p-8 text-center transition-all duration-300 hover:border-accent/20 hover:bg-[#1a1a1a]"
            >
              <span className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-full text-accent text-2xl transition-all duration-300 group-hover:bg-accent group-hover:text-white mb-6">
                <i className={item.icon} />
              </span>
              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-[#9ca3af] text-[15px] leading-relaxed mb-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
