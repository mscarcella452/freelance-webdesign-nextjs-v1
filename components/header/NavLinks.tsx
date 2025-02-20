"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function NavLinks({ className }: { className?: string }) {
  const currentRoute = usePathname();

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      {menuItems.map(({ label, href }, index) => (
        <li
          key={index}
          className={clsx("font-primary font-semibold", className)}
        >
          {currentRoute === href ? (
            <span
              className='text-primary'
              aria-current='page' // Indicate this is the active page
            >
              {label}
            </span>
          ) : (
            <Link
              href={href}
              className='hover:text-primary-dark'
              aria-label={`Go to ${label} page`}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </>
  );
}

export default NavLinks;
