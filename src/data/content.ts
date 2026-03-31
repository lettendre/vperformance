import type {
  NavLink,
  SocialLink,
  CertificationItem,
  ServiceItem,
  PricingPlan,
  TeamMember,
  TestimonialItem,
  GalleryImage,
  ChooseUsItem,
  ContactInfo,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/vperformance3/",
    icon: "instagram",
  },
];

export const footerSocialLinks: SocialLink[] = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/vperformance3/",
    icon: "instagram",
  },
  {
    platform: "email",
    href: "mailto:info@vperformance.lk",
    icon: "mail",
  },
];

export const certifications: CertificationItem[] = [
  {
    image: "/images/certifications/ace.avif",
    title: "ACE Certified",
    description:
      "Globally recognised coaching standards focused on safe, effective, and performance-driven training methods.",
  },
  {
    image: "/images/certifications/nasm.avif",
    title: "Corrective Exercise Specialist",
    description:
      "Advanced movement assessment and corrective strategies designed to reduce injury risk and improve mobility.",
  },
  {
    image: "/images/certifications/post brain.avif",
    title: "Brain & Movement Coaching",
    description:
      "Integrating neurological principles with functional training to enhance coordination, balance, and performance.",
  },
  {
    image: "/images/certifications/post foot.avif",
    title: "Foot Mechanics Specialist",
    description:
      "Targeted strategies to improve posture, gait mechanics, and overall movement efficiency from the ground up.",
  },
];

export const homeServices: ServiceItem[] = [
  {
    slug: "youth-fitness",
    image: "/images/services/youth-fitness.avif",
    title: "Youth Fitness (Ages 13–18)",
    description: "Build the Foundation. Perform at Your Best.",
  },
  {
    slug: "personal-training",
    image: "/images/services/personal-training.avif",
    title: "Personal Training",
    description: "One Coach. One Plan. Zero Guesswork.",
  },
  {
    slug: "adult-fitness",
    image: "/images/services/adult-fitness.avif",
    title: "Adult & General Fitness",
    description: "Train With Purpose. Move for Life.",
  },
  {
    slug: "senior-fitness",
    image: "/images/services/senior-fitness.avif",
    title: "Senior Fitness",
    description: "Move Well. Stay Strong. Live Independently.",
  },
  {
    slug: "injury-rehabilitation",
    image: "/images/services/injury-rehab.avif",
    title: "Injury Rehabilitation",
    description: "Fix the Root Cause. Not Just the Pain.",
  },
  {
    slug: "pre-postnatal-fitness",
    image: "/images/services/pre-and-postnatal.avif",
    title: "Pre & Postnatal Fitness",
    description: "Strong Through Pregnancy. Recovered After.",
  },
  {
    slug: "boxing-combat-sports",
    image: "/images/services/boxing.avif",
    title: "Boxing, Kickboxing & Combat Sports",
    description: "Train Like a Fighter. No Experience Needed.",
  },
  {
    slug: "commercial-dance",
    image: "/images/services/commercial-dance.avif",
    title: "Commercial Dance Classes",
    description: "Move with Confidence. Perform with Expression.",
  },
  {
    slug: "corporate-group-fitness",
    image: "/images/services/corporate-fitness.avif",
    title: "Corporate Group Fitness",
    description: "Healthier Teams. Better Performance.",
  },
  {
    slug: "breathwork",
    image: "/images/services/breathing-exercise.avif",
    title: "Breathwork: Sleep, Recovery & Stress",
    description: "Breathe Better. Recover Faster. Stress Less.",
  },
];

export interface ServicesPageItem {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  benefits?: string[];
  coach?: string;
  schedule?: string;
  formats?: string;
  price?: string;
  ctaText?: string;
  ctaHref?: string;
  reversed?: boolean;
}

export const servicesPageItems: ServicesPageItem[] = [
  {
    slug: "youth-fitness",
    image: "/images/services/youth-fitness.avif",
    title: "Youth Fitness (Ages 13–18)",
    tagline: "Build the Foundation. Perform at Your Best.",
    description:
      "Most young athletes train hard, but few train smart. At V Performance, we work with athletes aged 13 to 18 using the same movement principles applied in professional sport, adapted for developing bodies.\n\nEvery young athlete starts with a movement assessment. From there, we build a structured programme designed to develop strength, coordination, mobility, and body control, without the risks that come from training that's too intense, too early.",
    benefits: [
      "Improved sports performance across any discipline",
      "Reduced injury risk during critical growth years",
      "Proper movement patterns built from the ground up",
      "Strength and confidence that carries beyond the gym",
    ],
    price: "LKR 18,000 / 8 sessions (+ facility fee) | Initial Assessment: LKR 5,000",
  },
  {
    slug: "personal-training",
    image: "/images/services/personal-training.avif",
    title: "Personal Training",
    tagline: "One Coach. One Plan. Zero Guesswork.",
    description:
      "Our personal training programme is V Performance's most popular service. You get undivided coaching attention, a programme built entirely around your goals, and the kind of accountability that actually produces results.\n\nSessions begin with a full movement and strength assessment. Your coach then designs a structured programme combining corrective exercise and progressive strength training, tailored to your current level and target outcomes.",
    price: "LKR 38,000 / 8 sessions (includes facility fee)",
  },
  {
    slug: "adult-fitness",
    image: "/images/services/adult-fitness.avif",
    title: "Adult & General Fitness",
    tagline: "Train With Purpose. Move for Life.",
    description:
      "Whether you're returning to fitness after a long break or looking to break through a plateau, our adult fitness programmes are built around your goals, your body, and your schedule.\n\nEvery client starts with a movement assessment so we understand where you are before designing where you're going. Programmes are built around strength, mobility, and functional movement.",
    price: "LKR 25,000 / 10 sessions (+ facility fee) | Initial Assessment: LKR 5,000",
  },
  {
    slug: "senior-fitness",
    image: "/images/services/senior-fitness.avif",
    title: "Senior Fitness",
    tagline: "Move Well. Stay Strong. Live Independently.",
    description:
      "Age is not a limitation. Our oldest active client is 84 years old, proof that with the right approach, movement and strength are available at any stage of life.\n\nOur Senior Fitness programme begins with a thorough movement assessment covering mobility, joint health, balance, and individual history. Every session is designed specifically for the individual.",
    benefits: [
      "Improved balance and reduced fall risk",
      "Greater strength for everyday activities",
      "Reduced joint pain and morning stiffness",
      "Renewed confidence in movement and independence",
    ],
    price: "LKR 44,000 / 8 sessions (includes facility fee)",
  },
  {
    slug: "injury-rehabilitation",
    image: "/images/services/injury-rehab.avif",
    title: "Injury Rehabilitation",
    tagline: "Fix the Root Cause. Not Just the Pain.",
    description:
      "Pain is a signal, not a sentence. Our injury rehabilitation programme is built on the principle that lasting recovery requires understanding why an injury happened, not just treating where it hurts.\n\nEvery programme begins with a detailed movement assessment to identify the root cause. We build a structured progression that restores mobility, rebuilds strength, and corrects the movement patterns that may have contributed to injury.",
    benefits: [
      "Reduce pain and restore proper joint function",
      "Rebuild strength and mobility post-injury",
      "Correct compensations and dysfunctional movement patterns",
      "Return to sport or daily activity safely",
    ],
    price: "LKR 44,000 / 8 sessions (includes facility fee)",
  },
  {
    slug: "pre-postnatal-fitness",
    image: "/images/services/pre-and-postnatal.avif",
    title: "Pre & Postnatal Fitness",
    tagline: "Strong Through Pregnancy. Recovered After.",
    description:
      "Your body goes through profound physical changes during and after pregnancy. Our Pre & Postnatal Fitness programme supports you through every stage: safely, effectively, and with full respect for your body's current needs.\n\nDuring pregnancy, training focuses on maintaining strength, improving posture, and supporting the body as it adapts.\n\nAfter birth, the programme rebuilds core strength, restores pelvic stability, and progressively returns the body to full movement.",
    benefits: [
      "Stay strong and active throughout pregnancy",
      "Reduce common aches, back pain, and postural strain",
      "Rebuild core and pelvic floor strength after childbirth",
      "Return to exercise safely, without setbacks",
    ],
  },
  {
    slug: "boxing-combat-sports",
    image: "/images/services/boxing.avif",
    title: "Boxing, Kickboxing & Combat Sports",
    tagline: "Train Like a Fighter. No Experience Needed.",
    description:
      "Combat sports training at V Performance is led by **Coach Srimal Rodrigo**, professional combat sports coach and founder of Soul MMA, bringing elite-level coaching to athletes and beginners alike.",
    coach: "Coach Srimal Rodrigo",
    benefits: [
      "Boxing, Kickboxing, and Muay Thai fundamentals",
      "Pad work, heavy bag training, and combinations",
      "Footwork, timing, and defensive technique",
      "Practical self-defence skills",
      "Strength and conditioning for combat sports",
      "Controlled sparring for advanced participants",
    ],
    formats: "One-on-one coaching | Small group sessions | Kids MMA classes",
  },
  {
    slug: "commercial-dance",
    image: "/images/services/commercial-dance.avif",
    title: "Commercial Dance Classes",
    tagline: "Move with Confidence. Perform with Expression.",
    description:
      "Our dance sessions focus on Commercial Dance, a dynamic style fusing hip-hop, jazz, contemporary, and waacking. Classes develop real technique, stage presence, and musicality for all skill levels.\n\nEvery session includes a structured warm-up followed by choreography training that sharpens body lines, improves fluidity, and builds performance confidence.\n\nOpen to all skill levels.",
    coach: "Coach Dewni",
    schedule: "Every Saturday at 4:00 PM",
  },
  {
    slug: "corporate-group-fitness",
    image: "/images/services/corporate-fitness.avif",
    title: "Corporate Group Fitness",
    tagline: "Healthier Teams. Better Performance.",
    description:
      "Bring structured fitness training to your workplace. Sessions are available before or after office hours in a mini-group setting, professionally coached and tailored to the group's fitness level.",
    ctaText: "Contact Us",
    ctaHref: "/contact",
  },
  {
    slug: "breathwork",
    image: "/images/services/breathing-exercise.avif",
    title: "Breathwork: Sleep, Recovery & Stress",
    tagline: "Breathe Better. Recover Faster. Stress Less.",
    description:
      "Most people spend hours training, stretching, and planning nutrition, but completely overlook the one thing that fuels all of it. Your breath.\n\nAt V Performance, our Breathwork sessions teach you how to use intentional breathing as a tool to manage stress, improve sleep quality, and accelerate physical recovery. It is one of the most underutilised performance tools available, and it requires nothing but your body.\n\nWhether you are an athlete looking to recover faster between sessions, someone dealing with chronic stress, or simply struggling to get quality sleep, controlled breathing produces real, measurable change.\n\nNo equipment needed. No prior experience required.",
    benefits: [
      "Sleep: Calms the nervous system before bed for faster sleep onset and deeper rest",
      "Recovery: Enhances oxygen delivery to muscles, reduces tension, and accelerates post-training repair",
      "Stress: Reduces cortisol levels, lowers heart rate, and activates the body's rest-and-repair state",
    ],
    ctaText: "Contact us for details",
    ctaHref: "/contact",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Personal Training",
    price: "LKR 38,000",
    period: "8 sessions + facility fee",
    popular: true,
    features: [
      "Full movement & strength assessment",
      "Custom programme design",
      "Undivided coaching attention",
      "Progressive strength training",
    ],
  },
  {
    name: "Youth Fitness",
    price: "LKR 18,000",
    period: "8 sessions + facility fee",
    features: [
      "Movement assessment included",
      "Sport-specific development",
      "Ages 13–18",
      "Initial Assessment: LKR 5,000",
    ],
  },
  {
    name: "Adult Fitness",
    price: "LKR 25,000",
    period: "10 sessions + facility fee",
    features: [
      "Movement assessment included",
      "Strength & mobility focused",
      "Personalised programming",
      "Initial Assessment: LKR 5,000",
    ],
  },
  {
    name: "Senior Fitness",
    price: "LKR 44,000",
    period: "8 sessions + facility fee",
    features: [
      "Thorough movement assessment",
      "Balance & joint health focus",
      "Individually designed sessions",
      "Mobility & strength training",
    ],
  },
];

export const homeTeamMembers: TeamMember[] = [
  {
    name: "Ashan Vimuktha",
    role: "Director / Head Coach",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Vindya Kalpani",
    role: "Director",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Nadeesh Manoj Bandara",
    role: "Director",
    image: "/images/team/placeholder.jpg",
  },
];

export const teamPageMembers: TeamMember[] = [
  {
    name: "Ashan Vimuktha",
    role: "Director / Head Coach",
    image: "/images/team/placeholder.jpg",
    socials: [
      { platform: "instagram", href: "#", icon: "instagram" },
      { platform: "email", href: "#", icon: "mail" },
    ],
  },
  {
    name: "Vindya Kalpani",
    role: "Director",
    image: "/images/team/placeholder.jpg",
    socials: [
      { platform: "instagram", href: "#", icon: "instagram" },
      { platform: "email", href: "#", icon: "mail" },
    ],
  },
  {
    name: "Nadeesh Manoj Bandara",
    role: "Director",
    image: "/images/team/placeholder.jpg",
    socials: [
      { platform: "instagram", href: "#", icon: "instagram" },
      { platform: "email", href: "#", icon: "mail" },
    ],
  },
  {
    name: "Nimasha Perera",
    role: "Director",
    image: "/images/team/placeholder.jpg",
    socials: [
      { platform: "instagram", href: "#", icon: "instagram" },
      { platform: "email", href: "#", icon: "mail" },
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    text: "When I first joined V Performance I was sceptical as I had severe lower back pain and could barely move. After consulting with Ashan he took his time to create a personalised workout plan and guided me through the workouts along with the other personal trainers. After 2 months of training I went from having difficulty walking to doing 2 minute planks with 20kg on my back!",
    name: "Clive Shalindra",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/gallery-1.avif", wide: true },
  { src: "/images/gallery/gallery-2.avif" },
  { src: "/images/gallery/gallery-3.avif" },
  { src: "/images/gallery/gallery-4.avif" },
  { src: "/images/gallery/gallery-5.avif" },
  { src: "/images/gallery/gallery-6.avif", wide: true },
];

export const chooseUsItems: ChooseUsItem[] = [
  {
    icon: "bicycle",
    title: "Modern Equipment",
    description:
      "State-of-the-art training tools designed to support functional movement, performance, and safe progression.",
  },
  {
    icon: "leaf",
    title: "Customised Nutrition Plans",
    description:
      "Personalised nutrition guidance aligned with your goals, lifestyle, and long-term health.",
  },
  {
    icon: "trophy",
    title: "Professional Training",
    description:
      "Structured coaching built on proven methods, precision programming, and real results.",
  },
  {
    icon: "heartbeat",
    title: "Unique to Your Needs",
    description:
      "As a truly Sri Lankan fitness brand, we design training approaches that match our culture, lifestyles, and goals.",
  },
];

export const contactInfo: ContactInfo = {
  address: "2 Andarewatta Rd, Colombo 00600, Sri Lanka",
  addressLink: "https://maps.app.goo.gl/R794yHn1vv39hWu29",
  phones: [{ number: "+94777548505", display: "+94 77 754 8505" }],
  email: "info@vperformance.lk",
};

export const footerDescription =
  "A performance-driven training system focused on functional movement, precision coaching, and long-term human health.";

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0517332097456!2d79.87605911367754!3d6.88440679308586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259511e12e2a5%3A0x1f33a2dbfda3e3d6!2sV%20Performance!5e0!3m2!1sen!2slk!4v1770898066772!5m2!1sen!2slk";
