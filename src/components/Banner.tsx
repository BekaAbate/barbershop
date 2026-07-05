import Image from "next/image";
import Button from "./ui/Button";

export const Banner = () => {
  return (
    <div className="bg-primary h-100 flex items-center justify-between px-2 sm:px-18">
      <div className="flex flex-col items-start gap-4">
        <h2 className="font-serif text-[70px] text-black uppercase">
          25% Discount
        </h2>
        <p className="font-sans font-normal text-sm opacity-80 text-black max-w-[540px]">
          Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
          imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis
          impe.
        </p>
        <Button variant={"teritiary"} size={"md"} className="text-primary">
          book now
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src={"/images/banner-img.png"}
          alt="a barber giving a hair cut"
          width={600}
          height={528}
        />
      </div>
    </div>
  );
};
