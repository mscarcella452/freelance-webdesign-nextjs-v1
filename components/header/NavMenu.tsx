"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import clsx from "clsx";
import HamburgerButton from "@/components/header/HamburgerButton";
import usePathChange from "@/hooks/usePathChange";
import useMediaQuery from "@/hooks/useMediaQuery";

function NavMenu({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const pathChanged = usePathChange();

  // Memoize the toggleMenu function with useCallback
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (isMenuOpen && pathChanged) {
      setIsMenuOpen(false); // Close menu when path changes
    }
  }, [pathChanged, isMenuOpen]);

  useEffect(() => {
    if (isLgScreen && isMenuOpen) {
      setIsMenuOpen(false); // Close menu when screen size is Lg or larger
    }
  }, [isLgScreen, isMenuOpen]);

  return (
    <div className='flex lg:hidden items-center'>
      <HamburgerButton active={isMenuOpen} onClick={handleToggleMenu} />

      <ul
        aria-hidden={!isMenuOpen} // Mark the menu as hidden when not open
        aria-labelledby='navigation-menu' // Optional: Provide a label for context
        data-testid='nav-menu'
        className={clsx(
          "nav-container bg-background absolute top-16 md:top-20 left-0 right-0 w-full transition-all duration-300 ease-in-out flex flex-col items-center justify-center overflow-hidden gap-8",
          {
            "h-navmenuHeight lg:hidden": isMenuOpen,
            "h-[0]": !isMenuOpen,
          }
        )}
      >
        {children}
      </ul>
    </div>
  );
}

export default NavMenu;
