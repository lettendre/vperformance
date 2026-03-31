import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "pricing";
  size?: "default" | "normal";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-block text-[14px] font-semibold uppercase tracking-[0.03em] text-white transition-all duration-300";

  const variants = {
    primary: "bg-accent-solid px-[30px] py-[17px] hover:bg-accent-solid-hover hover:scale-105 hover:shadow-lg hover:shadow-accent/25",
    outline:
      "bg-transparent border-2 border-accent px-[30px] py-[17px] hover:bg-accent",
    pricing: "block bg-[#333333] px-[30px] py-[17px] unskew hover:bg-accent",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
