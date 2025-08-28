import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 p-4 text-white fixed w-full z-10 top-0 border-b border-white/10" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between items-center">
        
        <div className="hidden sm:flex space-x-5 items-center text-sm">
          <Link to='/' className={`${pathname==='/'?'text-yellow-300':'text-white/80 hover:text-white'} transition-colors`}>Home</Link>
          <Link to='/about' className={`${pathname==='/about'?'text-yellow-300':'text-white/80 hover:text-white'} transition-colors`}>About</Link>
        </div>
        <div className="text-3xl sm:text-2xl font-extrabold tracking-tight">
          <Link to='/'>Vijay Syam BK</Link>
        </div>
        <div className="hidden sm:flex space-x-5 items-center text-sm">
          <Link to='/experience' className={`${pathname==='/experience'?'text-yellow-300':'text-white/80 hover:text-white'} transition-colors`}>Education</Link>
          <Link to='/projects' className={`${pathname==='/projects'?'text-yellow-300':'text-white/80 hover:text-white'} transition-colors`}>Projects</Link>
          <Link to='/contact' className={`${pathname==='/contact'?'text-yellow-300':'text-white/80 hover:text-white'} transition-colors`}>Contact</Link>
          <a href='https://drive.google.com/file/d/1_weOAPoMf7tlHd3dHmVOW-Q9KFtJIbPK/view?usp=sharing' target='_blank' rel='noreferrer' className='group ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-amber-400/20 to-pink-400/20 border border-amber-400/30 text-amber-200 hover:from-amber-400/30 hover:to-pink-400/30 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 opacity-80 group-hover:opacity-100' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Resume
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu} className={`${pathname==='/'?'text-yellow-300':'text-white'} hover:text-yellow-300 transition-colors`}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu} className={`${pathname==='/about'?'text-yellow-300':'text-white'} hover:text-yellow-300 transition-colors`}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu} className={`${pathname==='/projects'?'text-yellow-300':'text-white'} hover:text-yellow-300 transition-colors`}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu} className={`${pathname==='/experience'?'text-yellow-300':'text-white'} hover:text-yellow-300 transition-colors`}>Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu} className={`${pathname==='/contact'?'text-yellow-300':'text-white'} hover:text-yellow-300 transition-colors`}>Contact</Link></li>
            <li><a href='https://drive.google.com/file/d/1cmQcxl3YyAAakRHwPgP9IMyAH2_Z5gwD/view?usp=sharing' target='_blank' rel='noreferrer' className='group inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 opacity-80 group-hover:opacity-100' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Resume
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
