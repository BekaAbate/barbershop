"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import { links } from "@/constants/nav-links";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className="flex items-center justify-between w-full px-2 sm:px-18 mt-10">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative min-w-7 min-h-6 lg:hidden"
        >
          <Image
            src="/images/icons/burger-menu.svg"
            loading="eager"
            alt="hamberger menu"
            fill
            className="object-contain"
          />
        </div>
        <div className="hidden lg:block">
          <Links />
        </div>
        <div>
          <Button variant="secondary" size="md" className="text-white">
            book Appointment
          </Button>
        </div>
      </header>
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
const Links = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-12.5">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "font-sans font-normal text-md text-headerLink hover:text-white text-nowrap",
            pathname === href && "font-bold text-white",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
