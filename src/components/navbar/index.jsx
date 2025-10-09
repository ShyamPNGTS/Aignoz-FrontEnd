import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiLogOut, FiUser } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
   { name: 'Program', path: '/program' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer text-xl font-bold text-gray-800">
          <Link to="/" onClick={scrollToTop}><img src={logo} alt="Logo" /></Link>
        </div>

        {/* Menu Items - Desktop */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-normal text-[16px]">
          {navLinks.map(link => {
            // 4. Determine if the link is active by comparing its path with the current URL path
            const isActive = currentPath === link.path;

            return (
              <Link key={link.name} to={link.path}>
                <li
                  onClick={scrollToTop} // The setActive call is removed
                  className={clsx(
                    'hover:text-primary-700 cursor-pointer',
                    // Use the 'isActive' boolean to apply the active class
                    isActive ? 'text-primary-700' : ''
                  )}
                >
                  {link.label || link.name}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Right Side: Auth/User */}
        {/* <div className="hidden lg:flex items-center gap-4">
          {user ? (
           <div className="relative inline-block group">
  <button className="px-6 py-2 bg-primary-600 text-white rounded-full cursor-pointer">
    {user.name}
  </button>

  <div className="absolute right-0 top-full mt-1  w-full min-w-max bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <Link
      to="/profile"
      className="flex items-center rounded-t-lg gap-3 px-4 py-2 hover:bg-primary-200"
    >
      <FiUser className="text-lg" /> Profile
    </Link>
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 cursor-pointer rounded-b-lg text-left px-4 py-2 hover:bg-primary-200"
    >
      <FiLogOut className="text-lg" />
      Logout
    </button>
  </div>
</div>



          ) : (
            <>
              <Link to="/login">
                <button className="px-8 py-2 text-black border cursor-pointer border-primary-500 rounded-full hover:bg-primary-600 hover:text-white">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-8 py-2 bg-primary-500 text-white cursor-pointer rounded-full hover:bg-primary-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div> */}

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-gray-700 font-medium text-base">
          <ul className="flex flex-col items-start gap-3 px-4">
            {navLinks.map(link => {
              // Same logic for mobile menu
              const isActive = currentPath === link.path;
              return (
                <Link key={link.name} to={link.path}>
                  <li
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                    className={clsx(
                      'hover:text-primary-700',
                      isActive ? 'text-primary-700' : ''
                    )}
                  >
                    {link.label || link.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="flex flex-col items-start gap-3 px-4 pt-4 border-t border-gray-200">
            {/* {user ? (
              <>
                <Link to="/profile" className="w-full px-0 py-2 hover:text-primary-700" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="w-full text-left px-0 py-2 hover:text-primary-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className='flex flex-col gap-3 w-full'>
                <Link to="/login">
                  <button className="w-full px-4 py-2 text-primary-600 border border-primary-600 rounded-full hover:bg-primary-100">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700">
                    Sign Up
                  </button>
                </Link>
              </div>
            )} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;