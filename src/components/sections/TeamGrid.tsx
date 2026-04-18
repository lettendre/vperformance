import { Mail } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TeamMember } from "@/types";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.958c.453.453.78.898.958 1.47.163.46.349 1.26.404 2.43.058 1.266.069 1.646.069 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.958 1.47 4.088 4.088 0 01-1.47.958c-.46.163-1.26.349-2.43.404-1.266.058-1.646.069-4.85.069s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.958 4.088 4.088 0 01-.958-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.958-1.47 4.088 4.088 0 011.47-.958c.46-.163 1.26-.349 2.43-.404C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.278.261 2.15.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.15-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.763.499-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.059-1.278-.261-2.15-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.097.333 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
);

const socialIconMap: Record<string, React.FC<{ size?: number }>> = {
  instagram: InstagramIcon,
  mail: ({ size = 14 }) => <Mail size={size} />,
};

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

interface TeamGridProps {
  members: TeamMember[];
  title?: string;
  subtitle?: string;
}

export function TeamGrid({ members, title = "TRAIN WITH EXPERTS", subtitle = "Our Team" }: TeamGridProps) {
  return (
    <section className="bg-dark-3 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle={subtitle} title={title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className={`team-card h-[450px] relative overflow-hidden ${
                member.image ? "bg-cover bg-center bg-no-repeat" : "team-card-nophoto"
              }`}
              style={member.image ? { backgroundImage: `url('${member.image}')` } : undefined}
            >
              {!member.image && (
                <div className="team-card-nophoto-initials">
                  {getInitials(member.name)}
                </div>
              )}
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
                        {(() => {
                          const Icon = socialIconMap[social.icon];
                          return Icon ? <Icon size={14} /> : null;
                        })()}
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