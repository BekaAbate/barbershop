export interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Vel Pellentesque",
    excerpt: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    image: "/images/barber-hero.jpg",
  },
  {
    id: 2,
    title: "Porta Consequat",
    excerpt: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    image: "/images/barber-hero.jpg",
  },
  {
    id: 3,
    title: "Fringilla Augue",
    excerpt: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    image: "/images/barber-hero.jpg",
  },
  {
    id: 4,
    title: "Libero Vestibulum",
    excerpt: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    image: "/images/barber-hero.jpg",
  },
];
