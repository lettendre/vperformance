import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BannerProps {
  heading: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  videoHref?: string;
  backgroundImage?: string;
}

export function Banner({
  heading,
  subtitle,
  buttonText,
  buttonHref,
  videoHref,
  backgroundImage = "/images/banner-bg.avif",
}: BannerProps) {
  return (
    <section
      className="h-[350px] md:h-[550px] flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[32px] md:text-[42px] text-white font-bold uppercase mb-6 tracking-tight">
            {heading}
          </h2>
          {subtitle && (
            <div className="text-base md:text-lg text-text-muted font-semibold uppercase mb-10 tracking-wide">
              {subtitle}
            </div>
          )}
          {buttonText && buttonHref && (
            <Button variant="outline" href={buttonHref}>
              {buttonText}
            </Button>
          )}
          {videoHref && (
            <a
              href={videoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-[70px] w-[70px] bg-accent rounded-full leading-[70px] text-center text-4xl text-white"
            >
              <Play size={28} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
