export interface Testimonial {
  name: string;
  location: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "GLEN SPARKLE",
    location: "miami",
    content:
      "Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.",
    image: "/images/testimonial-image.jpg",
  },
  {
    name: "MICHAEL RICHARDS",
    location: "CALIFORNIA",
    content:
      "Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.",
    image: "/images/testimonial-image.jpg",
  },
  {
    name: "JOHN HOOD",
    location: "NY",
    content:
      "Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.",
    image: "/images/testimonial-image.jpg",
  },
];
