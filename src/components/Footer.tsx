import { contactInfo } from "@/data/contact";
import ContactCard from "./ui/ContactCard";

export const Footer = () => {
  return (
    <div className="bg-white px-2 sm:px-18 pt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="font-serif text-black text-5xl uppercase">contact us</h2>
        <p className="font-sans text-sm text-black max-w-[770px] opacity-80 text-center">
          Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus
          eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum
          metusurabitur nulla nisi.
        </p>
      </div>
      <div className="mt-16 pb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((item) => (
          <ContactCard key={item.title} {...item} />
        ))}
      </div>
      <div className="h-[2px] w-full bg-primary" />
      <div className="flex items-center justify-center">
        <p className="font-sans text-sm text-black opacity-80 py-10">
          © Copyright Barbershop 2024
        </p>
      </div>
    </div>
  );
};
