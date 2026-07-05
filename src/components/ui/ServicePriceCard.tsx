import { ServicePrice } from "@/data/servicePrice";

export const ServicePriceCard = ({
  name,
  price,
  description,
}: ServicePrice) => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="flex items-center">
        <p className="font-serif text-2xl text-white">{name}</p>
        <div className="h-px flex-1 bg-primary"></div>
        <p className="font-serif text-2xl text-white">${price}</p>
      </div>
      <div className="max-w-[410px] text-sans text-sm text-white opacity-80">
        {description}
      </div>
    </div>
  );
};
