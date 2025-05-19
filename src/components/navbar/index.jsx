import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";

// Import Images here :
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("Home");

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0 cursor-pointer text-xl font-bold text-gray-800">
          <Link to={'/'} onClick={scrollToTop()}><img src={logo} alt="" /></Link>
        </div>

        {/* Center: Menu Items */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-normal text-[16px]">
          <Link to={'/'}><li onClick={()=> {setActive("Home"); scrollToTop()}} className={clsx(
        "hover:text-primary-700 cursor-pointer",
        active == "Home" ? "text-primary-700" : " "
      )}>Home</li></Link>
          <Link to={'/about'}><li onClick={()=> {setActive("About"); scrollToTop()}} className={clsx(
        "hover:text-primary-700 cursor-pointer",
        active == "About" ? "text-primary-700" : " "
      )}>About</li></Link>
          <Link to={'/blogs'}><li onClick={()=> {setActive("Blogs"); scrollToTop()}} className={clsx(
        "hover:text-primary-700 cursor-pointer",
        active == "Blogs" ? "text-primary-700" : " "
      )}>Blogs</li></Link>
          <Link to={'/appointment'}><li onClick={()=> {setActive("Appointment"); scrollToTop()}} className={clsx(
        "hover:text-primary-700 cursor-pointer",
        active == "Appointment" ? "text-primary-700" : " "
      )}>Appointment</li></Link>
          <Link to={'/contact-us'}><li onClick={()=> {setActive("Contact"); scrollToTop()}} className={clsx(
        "hover:text-primary-700 cursor-pointer",
        active == "Contact" ? "text-primary-700" : " "
      )}>Contact Us</li></Link>
          
        </ul>

        {/* Right: Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to={'login'}>
          <button className="px-8 py-2 text-black border cursor-pointer border-primary-500 rounded-full hover:bg-primary-600 hover:text-white">
            Login
          </button></Link>
          <Link to={'signup'}>
          <button className="px-8 py-2 bg-primary-500 text-white cursor-pointer rounded-full hover:bg-primary-600">
            Sign Up
          </button></Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-gray-700 font-medium text-base">
          <ul className="flex flex-col items-start gap-3 px-4">
            <li className="hover:text-primary-700">Home</li>
            <li className="hover:text-primary-700">About</li>
            <li className="hover:text-primary-700">Blogs</li>
            <li className="hover:text-primary-700">Appointment</li>
            <li className="hover:text-primary-700">Contact Us</li>
            
          </ul>
          <div className="flex flex-col items-start gap-3 px-4">
           <Link to={'/login'}>
           <button className="w-full px-4 py-2 text-primary-600 border border-primary-600 rounded-full hover:bg-primary-600">
              Login
            </button></Link>
           <Link to={'/signup'}>
           <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-600">
              Sign Up
            </button></Link>
          </div>
        </div>
      )}
      
    </nav>
  )
}

export default Navbar;
