import { links } from "@/constants/nav-links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  return (
    <>
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />
      <aside
        className={clsx(
          "fixed top-0 left-0 h-screen w-72 bg-black z-50 p-8 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button onClick={onClose} className="mb-10">
          X
        </button>
        <nav className="flex flex-col gap-8">
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
      </aside>
    </>
  );
}
