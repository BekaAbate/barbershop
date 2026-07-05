import { Banner } from "@/components/Banner";
import Brands from "@/components/Brands";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
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
            contact us
          </h1>
        </div>
      </div>

      <div
        className="relative bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/services-bg.jpg)`,
        }}
      >
        <div className="absolute inset-0 w-full backdrop-blur-sm bg-black/40"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-2 sm:px-18 py-20 gap-4">
          <div className="flex flex-col items-center justify-center text-center lg:w-[50%]">
            <h2 className="font-serif text-white text-5xl mb-8">
              Come Visit Us
            </h2>
            <h3 className="font-serif text-white text-2xl mb-4">Office</h3>
            <p className="font-sans text-white text-sm max-w-[329px] mb-2">
              304 North Cardinal St. Dorchester Center, MA 02124
            </p>
            <h3 className="font-serif text-white text-2xl mb-4">Contact</h3>
            <p className="font-sans text-white text-sm">info@company.com</p>
            <p className="font-sans text-white text-sm mb-2">
              contact@company.com
            </p>
            <h3 className="font-serif text-white text-2xl mb-4">
              Working Hours
            </h3>
            <p className="font-sans text-white text-sm">
              Monday-Saturday 9am - 6pm
            </p>
            <p className="font-sans text-white text-sm">Sunday 10am - 17pm</p>
          </div>
          <div className="max-sm:w-full lg:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-white px-2 sm:px-18 py-16">
        <Banner />
      </div>
      <Brands />
      <Footer />
    </>
  );
}
