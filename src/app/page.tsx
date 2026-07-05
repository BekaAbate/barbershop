import Button from "@/components/ui/Button";
import Header from "@/components/Header";
import { ServicesCard } from "@/components/ui/ServicesCard";
import { services } from "@/data/services";
import Image from "next/image";
import Counter from "@/components/Counter";
import { Banner } from "@/components/Banner";
import { Testimonials } from "@/components/Testimonials";
import Brands from "@/components/Brands";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Counter />
      <Banner />
      <Testimonials />
      <Brands />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div
      className="relative bg-black bg-cover bg-center min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(/images/barber-hero.jpg)`,
      }}
    >
      <div className="absolute inset-0 h-full w-full backdrop-blur-sm bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center">
        <Header />
        <div className="w-full h-16"></div>
        <div className="relative w-[350px] h-[400px] sm:w-[600px] sm:h-[450px] lg:w-[700px] lg:h-[450px]">
          <Image
            src="/images/Logo.svg"
            loading="eager"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <div
      className="min-h-screen relative bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/services-bg1.jpg)",
      }}
    >
      <div className="absolute inset-0 h-full w-full backdrop-blur-sm bg-black/70"></div>
      <div className="relative px-2 sm:px-18 pt-20 pb-30">
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="font-sans font-normal text-xl text-primary uppercase">
            our treatment
          </h3>
          <h2 className="font-serif font-normal text-5xl text-white uppercase">
            Services
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-20">
          {services.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>
        <div className="w-full mt-5 flex items-center justify-center">
          <Button variant={"secondary"} size={"md"}>
            Explore now
          </Button>
        </div>
      </div>
    </div>
  );
};
