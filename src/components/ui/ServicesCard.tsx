import { service } from "@/data/services";

export const ServicesCard = ({ icon: Icon, title, description }: service) => {
  return (
    <div className="flex flex-col justify-center items-center border border-primary gap-[25px] text-center py-[40px]">
      <Icon className="size-[60px] text-primary" />
      <h3 className="font-serif text-[20px]">{title}</h3>
      <p className="w-[242px] font-sans text-sm opacity-80">{description}</p>
    </div>
  );
};
