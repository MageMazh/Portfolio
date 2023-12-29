import { useState, useEffect } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  // Handle click outside hamburger menu
  const handleClickOutside = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).matches("#hamburger") &&
      !(e.target as HTMLElement).closest("#nav-menu")
    ) {
      setHamburgerActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full z-10 ">
      <main
        className={`absolute flex items-center justify-between px-14 h-12 w-full transition duration-500 ease-in-out ${
          scrolling ? "bg-secondary" : "bg-transparent"
        }`}
      >
        <div>
          <a href="#home" className="py-6 text-lg font-bold text-primary">
            Mage
          </a>
        </div>
        <button
          id="hamburger"
          name="hamburger"
          type="button"
          className="absolute right-14 block group lg:hidden"
          onClick={toggleHamburger}
        >
          <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-primary"></span>
          <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-primary"></span>
          <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-primary"></span>
        </button>

        <nav
          id="nav-menu"
          className={`absolute lg:static right-14 top-full w-[250px] lg:w-fit rounded-lg bg-gray-500 lg:bg-transparent py-4  ${
            isHamburgerActive ? "" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col px-4 gap-2 lg:flex-row lg:gap-8 lg:px-0">
            <li className="group">
              <a
                href="#home"
                className="flex py-2 text-white group-hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className="flex py-2 text-white group-hover:text-primary"
              >
                About
              </a>
            </li>
            <li className="group">
              <a
                href="#skill"
                className="flex py-2 text-white group-hover:text-primary"
              >
                Skills
              </a>
            </li>
            <li className="group">
              <a
                href="#project"
                className="flex py-2 text-white group-hover:text-primary"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                className="flex py-2 text-white group-hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </header>
  );
};

export default Header;
