interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
}

export function Breadcrumb({
  title,
  backgroundImage = "/images/breadcrumb-bg.jpg",
}: BreadcrumbProps) {
  return (
    <section
      className="h-[500px] pt-[230px] bg-cover bg-no-repeat bg-top-center max-[479px]:pt-[180px]"
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
