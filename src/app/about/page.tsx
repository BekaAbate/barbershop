import { Banner } from "@/components/Banner";
import Brands from "@/components/Brands";
import Counter from "@/components/Counter";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BarberCard } from "@/components/ui/BarberCard";
import { barbers } from "@/data/barbers";

export default function About() {
  return (
    <>
      <div
        className="relative bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/barber-hero.jpg)`,
        }}
      >
        <div className="absolute inset-0 w-full backdrop-blur-sm bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Header />
          <div className="w-full h-16"></div>
          <h1 className="font-serif font-black text-5xl text-white uppercase mb-20">
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-white px-2 sm:px-18 pt-14">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-sans text-primary text-xl uppercase">
            meet the family
          </h3>
          <h2 className="font-serif text-black text-5xl uppercase">
            our barbers
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
          {barbers.map((barber) => (
            <BarberCard key={barber.name} {...barber} />
          ))}
        </div>
      </div>
      <Counter />
      <Banner />
      <Brands />
      <Footer />
    </>
  );
}
