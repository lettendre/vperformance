import { galleryImages } from "@/data/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <div className="bg-dark-3 overflow-hidden">
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={cn(
              "h-[472px] bg-cover bg-center bg-no-repeat",
              img.wide && "gallery-wide"
            )}
            style={{ backgroundImage: `url('${img.src}')` }}
          />
        ))}
      </div>
    </div>
  );
}
