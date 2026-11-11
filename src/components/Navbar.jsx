import React, { useState, useEffect } from 'react';

const RESUME_URL = 'https://drive.google.com/file/d/1yGxhSgvDOJkjfYIw30X5TMwGCpRu1Q8l/view?usp=drive_link';

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActive(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setToggle(false);
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/75 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <p className="text-white text-[18px] font-bold flex">
            Vijay Syam &nbsp; <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  isActive ? "text-white font-semibold" : "text-secondary"
                } hover:text-white text-[17px] font-medium cursor-pointer transition-colors duration-200`}
              >
                {link.title}
              </li>
            );
          })}
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-white text-[17px] font-medium cursor-pointer transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain cursor-pointer text-white text-2xl"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? '✕' : '☰'}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-50 rounded-xl bg-black-100/90 backdrop-blur-md border border-white/10 shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li
                    key={link.id}
                    className={`${
                      isActive ? "text-white font-semibold" : "text-secondary"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.title}
                  </li>
                );
              })}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggle(false)}
                  className="text-secondary font-medium cursor-pointer text-[16px]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
