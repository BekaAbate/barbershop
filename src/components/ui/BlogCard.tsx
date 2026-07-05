import { BlogPost } from "@/data/blog";
import Image from "next/image";

export default function BlogCard({ title, excerpt, image }: BlogPost) {
  return (
    <div className="flex-col items-center">
      <div className="relative w-full h-[250px]">
        <Image src={image} alt="blog image" fill className="object-cover" />
      </div>
      <div className="bg-black py-8 px-10">
        <h3 className="font-serif text-white text-2xl mb-4">{title}</h3>
        <p className="font-sans text-sm text-white opacity-80 mb-6">
          {excerpt}
        </p>
        <p className="font-sans text-[13px] text-primary uppercase">
          read more
        </p>
      </div>
    </div>
  );
}
