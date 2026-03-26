export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface CertificationItem {
  image: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: SocialLink[];
}

export interface TestimonialItem {
  text: string;
  name: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  wide?: boolean;
}

export interface ChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  addressLink: string;
  phones: { number: string; display: string }[];
  email: string;
}
