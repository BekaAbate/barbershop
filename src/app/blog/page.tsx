import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

export default function Blog() {
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
            Blog
          </h1>
        </div>
      </div>

      <div className="bg-counter px-2 sm:px-18 pt-14">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-sans text-primary text-xl uppercase">Our Blog</h3>
          <h2 className="font-serif text-white text-5xl uppercase">
            Latest News
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.id} {...blogPost} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mb-10">
          <Button variant={"secondary"} size={"square"} className="text-white">
            1
          </Button>
          <Button variant={"primary"} size={"square"} className="text-white">
            2
          </Button>
          <Button variant={"primary"} size={"square"} className="text-white">
            {">"}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
