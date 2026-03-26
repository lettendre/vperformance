import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TeamMember } from "@/types";

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Our Team" title="TRAIN WITH EXPERTS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="team-card h-[450px] relative overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${member.image}')` }}
            >
              <div className="team-card-overlay">
                <h3 className="text-white text-lg font-semibold mb-3 block">
                  {member.name}
                </h3>
                <span className="block text-[11px] font-semibold text-[#aaa] uppercase tracking-[0.12em]">
                  {member.role}
                </span>
                {member.socials && (
                  <div className="mt-3 flex justify-center gap-2.5" style={{ transform: "skewY(5deg)" }}>
                    {member.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        className="text-sm text-text-muted hover:text-accent transition-colors"
                      >
                        <i className={`fa ${social.icon}`} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
