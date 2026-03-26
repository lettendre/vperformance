interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
}

export function Breadcrumb({
  title,
  backgroundImage = "/images/breadcrumb-bg.avif",
}: BreadcrumbProps) {
  return (
    <section
      className="h-[320px] md:h-[500px] flex items-end justify-center pb-16 md:pb-24 bg-cover bg-no-repeat bg-top-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-[48px] md:text-[56px] max-[479px]:text-[36px] text-white font-bold uppercase mb-6 tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
