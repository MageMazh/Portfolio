import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full z-10 ">
      <div className={`absolute flex items-center justify-between px-14 h-12 w-full transition duration-500 ease-in-out ${scrolling ? 'bg-secondary' : 'bg-transparent'}`}>
        <div>
          <a href="#home" className="py-6 text-lg font-bold text-primary">magemazh</a>
        </div>
        <nav id="nav-menu">
          <ul className="flex gap-8">
          <li className="group">
                  <a href="#home" className="flex py-2 text-white group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                  <a href="#about" className="flex py-2 text-white group-hover:text-primary">About</a>
                </li>
                <li className="group">
                  <a href="#" className="flex py-2 text-white group-hover:text-primary">Skill</a>
                </li>
                <li className="group">
                  <a href="#" className="flex py-2 text-white group-hover:text-primary">Portofolio</a>
                </li>
                <li className="group">
                  <a href="#" className="flex py-2 text-white group-hover:text-primary">Contact</a>
                </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
