import { Barbers } from "@/data/barbers";
import Image from "next/image";
import Button from "./Button";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";

export const BarberCard = ({ name, image }: Barbers) => {
  return (
    <div className="flex-col items-center">
      <div className="relative w-full h-[250px]">
        <Image src={image} alt="blog image" fill className="object-cover" />
      </div>
      <div className="bg-black py-8 px-10 flex flex-col items-center">
        <h3 className="font-serif text-white text-2xl mb-4 uppercase">
          {name}
        </h3>
        <div className="flex items-center gap-4 my-4">
          <FacebookIcon className="size-[15px]" />
          <TwitterIcon className="size-[15px]" />
          <InstagramIcon className="size-[15px]" />
        </div>
        <Button variant={"secondary"} size={"sm"} className="px-6">
          book now
        </Button>
      </div>
    </div>
  );
};
