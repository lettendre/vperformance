import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { TeamGrid } from "@/components/sections/TeamGrid";

import { teamPageDirectors } from "@/data/content";
import { teamPageMembers } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the V Performance coaching team dedicated to functional fitness, corrective exercise, and performance training. Experienced professionals focused on personalised progress and real results.",
  alternates: { canonical: "https://www.vperformance.lk/team" },
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb title="Our Team" />
      <TeamGrid
        members={teamPageDirectors}
        subtitle="Leadership"
        title="MEET THE DIRECTORS"
      />
      <TeamGrid
        members={teamPageMembers}
        subtitle="Driving Our Vision"
        title="TRAIN WITH EXPERTS"
      />
    </>
  );
}