import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { id: "/", title: "Home" },
    { id: "/about", title: "About" },
    { id: "/experience", title: "Education" },
    { id: "/projects", title: "Projects" },
    { id: "/contact", title: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Vijay Syam &nbsp; <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${pathname === link.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
          <li>
            <a
              href='https://drive.google.com/file/d/1AAXJj82OoefRiBr_4q2hdKu4Dhw7aN9V/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300'
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

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black-100 border border-white/10`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${pathname === link.id ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
              <li>
                <a
                  href='https://drive.google.com/file/d/1s97ZsoFyUk3tkerNdzm6zG_27cjXHYVg/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                  className='text-secondary font-poppins font-medium cursor-pointer text-[16px]'
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
