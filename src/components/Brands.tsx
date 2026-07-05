import Image from "next/image";

export default function Brands() {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-counter justify-between py-16 px-2 sm:px-18 gap-4">
      <div className="sm:border-r border-r-primary sm:w-[50%] sm:py-20 w-full">
        <h2 className="font-serif text-[45px] text-white uppercase">
          brands we carry
        </h2>
        <p className="font-sans text-sm opacity-80 text-white max-w-[340]">
          Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
          mollis. Nulla porta risus id neque.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full sm:w-[50%]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="relative size-[100px] lg:size-[150px]">
            <Image
              src={"/images/brands-img.png"}
              alt="brands"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
