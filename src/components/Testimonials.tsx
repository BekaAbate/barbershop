import { testimonials } from "@/data/testimonial";
import { TestimonialCard } from "./ui/TestimonialCard";

export const Testimonials = () => {
  return (
    <div className="bg-white px-2 sm:px-18 pt-10 pb-10">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h3 className="font-sans text-primary text-[20px] text-center">
          WHAT PEOPLE SAY ABOUT US
        </h3>
        <h2 className="font-serif text-black text-4xl sm:text-5xl">
          CLIENTS REVIEWS
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-18">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
