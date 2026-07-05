import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";
import { ServicesCard } from "@/components/ui/ServicesCard";
import { services } from "@/data/services";
import { Footer } from "@/components/Footer";
import { servicePrices } from "@/data/servicePrice";
import { ServicePriceCard } from "@/components/ui/ServicePriceCard";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/ui/BlogCard";

export default function Services() {
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
            Services
          </h1>
        </div>
      </div>

      <div
        className="min-h-screen relative bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/services-bg1.jpg)",
        }}
      >
        <div className="absolute inset-0 h-full w-full backdrop-blur-sm bg-black/70"></div>
        <div className="relative px-2 sm:px-18 pt-20 pb-30">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-20">
            {services.map((service) => (
              <ServicesCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-counter px-2 sm:px-18 pb-16">
        <div className="grid grid-cols-2 py-20 gap-10">
          {servicePrices.map((service) => (
            <ServicePriceCard key={service.id} {...service} />
          ))}
        </div>
        <Banner />
      </div>
      <Testimonials />
      <div className="bg-counter px-2 sm:px-18 pt-14">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-sans text-primary text-xl uppercase">Our Blog</h3>
          <h2 className="font-serif text-white text-5xl uppercase">
            Latest News
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 my-20">
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.id} {...blogPost} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
