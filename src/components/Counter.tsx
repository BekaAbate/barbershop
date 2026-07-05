import { counts } from "@/data/counts";
import { CountCard } from "./ui/CountCard";

const Counter = () => {
  return (
    <div className="sm:flex items-center justify-between w-full px-2 sm:px-18 bg-counter pt-20 pb-30">
      {counts.map((count) => (
        <CountCard key={count.label} {...count} />
      ))}
    </div>
  );
};
export default Counter;
