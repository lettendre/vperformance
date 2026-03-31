import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Professional Standards" title="Certifications & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-dark-2 p-[30px_20px] text-center rounded-xl transition-all duration-300 h-full hover:-translate-y-1.5 hover:bg-[#111]"
            >
              <div className="bg-white rounded-[14px] p-5 mb-5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={80}
                  height={80}
                  sizes="80px"
                  quality={65}
                  className="max-h-[80px] w-auto mx-auto object-contain"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">
                {cert.title}
              </h3>
              <p className="text-text-dim text-[15px] leading-relaxed mb-0">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
