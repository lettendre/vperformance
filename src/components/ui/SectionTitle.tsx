import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
}

export function SectionTitle({
  subtitle,
  title,
  className,
  align = "center",
  children,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-[45px]",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="text-xs text-accent uppercase font-semibold tracking-[0.15em]">{subtitle}</span>
      <h2 className="text-white text-[28px] md:text-[38px] font-bold uppercase mt-3 tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}
