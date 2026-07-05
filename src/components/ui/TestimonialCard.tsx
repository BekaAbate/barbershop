import { Testimonial } from "@/data/testimonial";
import Image from "next/image";

export const TestimonialCard = ({
  image,
  name,
  content,
  location,
}: Testimonial) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>
      <p className="font-sans text-sm text-black opacity-80 max-w-[310px] text-center">
        {content}
      </p>
      <p className="font-sans font-bold text-lg text-primary uppercase text-center">
        {name}, {location}
      </p>
    </div>
  );
};
