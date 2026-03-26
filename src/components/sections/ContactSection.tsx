import { contactInfo, mapEmbedUrl } from "@/data/content";

export function ContactSection() {
  return (
    <>
      {/* Contact cards */}
      <section className="bg-dark-3 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-4">
          {/* Eyebrow + heading */}
          <div className="text-center mb-14">
            <span className="text-xs text-accent uppercase font-semibold tracking-[0.15em]">
              Contact Us
            </span>
            <h2 className="text-white text-[28px] md:text-[38px] font-bold uppercase mt-3 tracking-tight">
              Let&apos;s Talk
            </h2>
            <p className="text-[#9ca3af] text-base mt-4 max-w-md mx-auto">
              Ready to start training? Have a question? Reach out, we&apos;d love to hear from you.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Address */}
            <a
              href={contactInfo.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-2 border border-white/5 rounded-lg p-8 text-center transition-all duration-300 hover:border-accent/30 hover:bg-[#111]"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 text-accent text-xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <i className="fa fa-map-marker" />
              </div>
              <h3 className="text-white text-base font-semibold mb-2">Visit Us</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-0">
                2 Andarewatta Rd,
                <br />
                Colombo 00600, Sri Lanka
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contactInfo.phones[0].number}`}
              className="group bg-dark-2 border border-white/5 rounded-lg p-8 text-center transition-all duration-300 hover:border-accent/30 hover:bg-[#111]"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 text-accent text-xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <i className="fa fa-phone" />
              </div>
              <h3 className="text-white text-base font-semibold mb-2">Call Us</h3>
              <p className="text-[#9ca3af] text-sm mb-0">
                {contactInfo.phones[0].display}
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group bg-dark-2 border border-white/5 rounded-lg p-8 text-center transition-all duration-300 hover:border-accent/30 hover:bg-[#111]"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 text-accent text-xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <i className="fa fa-envelope-o" />
              </div>
              <h3 className="text-white text-base font-semibold mb-2">Email Us</h3>
              <p className="text-[#9ca3af] text-sm mb-0">
                {contactInfo.email}
              </p>
            </a>
          </div>

          {/* Hours */}
          <div className="text-center mt-12">
            <p className="text-[#9ca3af] text-sm">
              <span className="text-[#999]">Morning:</span> 5:30 AM – 12:30 PM
              <span className="mx-3 text-white/10">|</span>
              <span className="text-[#999]">Afternoon:</span> 3:30 PM – 7:30 PM
              <span className="mx-3 text-white/10">|</span>
              <span className="text-[#999]">Open 7 days a week</span>
            </p>
          </div>
        </div>
      </section>

      {/* Full-width map */}
      <section className="bg-dark-1">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="V Performance Location"
        />
      </section>
    </>
  );
}
