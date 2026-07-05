import { count } from "@/data/counts";

export const CountCard = ({ icon: Icon, label, count }: count) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 mb-10 sm:mb-0">
      <Icon className="size-[60px] text-primary" />
      <p className="text-primary font-serif text-[70px]">{count}</p>
      <p className="text-white font-serif text-[22px] uppercase">{label}</p>
    </div>
  );
};
