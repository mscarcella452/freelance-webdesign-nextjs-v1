import React from "react";
import clsx from "clsx";

type HamburgerButtonProps = {
  active: boolean;
  onClick: () => void;
};

function HamburgerButton({ active, onClick }: HamburgerButtonProps) {
  const hamburgerLineClass =
    "absolute transition duration-300 ease-in-out h-0.5 rounded-lg w-full bg-black";
  // sr-only === 'close menu' or 'open menu' is visible for screen readers only
  // aria-hidden === meaningless for a screen reader

  return (
    <button
      className={"p-2 hover:bg-neutral-light rounded-sm"}
      onClick={onClick}
      aria-label='Toggle navigation menu'
      aria-expanded={active}
      data-testid='hamburger-btn'
    >
      {/* Accessible text for screen readers */}
      <div className='sr-only' role='status'>
        Navigation menu is currently {active ? "open" : "closed"}.
      </div>

      <div className='w-6 h-5 flex flex-col justify-around relative'>
        <span
          aria-hidden='true'
          data-testid='hamburger-line'
          className={clsx(
            hamburgerLineClass,
            active ? "rotate-45" : "-translate-y-1"
          )}
        />
        <span
          aria-hidden='true'
          data-testid='hamburger-line'
          className={clsx(
            hamburgerLineClass,
            active ? "-rotate-45" : "translate-y-1"
          )}
        />
      </div>
    </button>
  );
}

export default HamburgerButton;
