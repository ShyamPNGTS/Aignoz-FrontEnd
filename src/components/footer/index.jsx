import React from 'react'

// Import Images here :
import logo from '../../assets/images/logo.png';

// Import Images here :
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/mail.png';
import youtube from '../../assets/icons/YouTube.png';
import whatsapp from '../../assets/icons/Whatsapp.png';
import linkedin from '../../assets/icons/LinkedIn.png';
import instagram from '../../assets/icons/Instagram.png';
import facebook from '../../assets/icons/Facebook.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
        
        <>
            <footer className="bg-[#BE34EA33] text-gray-700 py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
                    {/* Left: Logo + Paragraph */}
                    <div className="lg:w-1/3">
                        <Link to={'/'}><img src={logo} alt="Logo" className="h-18 mb-4" /></Link>
                        <p className="text-[14px] text-[#24292E] ">
                            We are committed to providing trusted, compassionate healthcare. Our expert team ensures quality treatment, easy appointments, and patient-first care—every step of the way.
                        </p>
                        {/* <div className='flex gap-3 mt-8'>
                            <img className='cursor-pointer' src={facebook} alt="" />
                            <img className='cursor-pointer' src={whatsapp} alt="" />
                            <img className='cursor-pointer' src={youtube} alt="" />
                            <img className='cursor-pointer' src={linkedin} alt="" />
                            <img className='cursor-pointer' src={instagram} alt="" />
                        </div> */}
                    </div>

                    {/* Right: 3 Columns */}
                    <div className="flex flex-col md:justify-around sm:flex-row gap-8 md:gap-16 md:w-2/3">
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-[15px] text-[#24292E] font-[600] mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/'}>Home</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/about'}>About Us</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/blogs'}>Blogs</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/appointment'}>Appointment</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>

                        {/* Specialists */}
                        {/* <div>
                            <h4 className="text-[15px] text-[#24292E] font-[600] mb-4">Our Specialists</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-primary-600 text-[#24292E] cursor-pointer">General Consultation</li>
                                <li className="hover:text-primary-600 text-[#24292E] cursor-pointer">Pediatric Care</li>
                                <li className="hover:text-primary-600 text-[#24292E] cursor-pointer">Diagnostics & Lab Tests</li>
                                <li className="hover:text-primary-600 text-[#24292E] cursor-pointer">Preventive Health Checkups</li>
                                <li className="hover:text-primary-600 text-[#24292E] cursor-pointer">Telemedicine</li>
                            </ul>
                        </div> */}

                        {/* Policies */}
                        <div>
                            <h4 className="text-[15px] text-[#24292E] font-[600] mb-4">Policies</h4>
                            <ul className="space-y-2 text-sm">
                               <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/terms-and-conditions'}>Terms & Conditions</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                                <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/refund-policy'}>Refund & Cancellation Policy</Link></li>
                                 <li onClick={scrollToTop()} className="hover:text-primary-600 text-[#24292E] cursor-pointer"><Link to={'/shipping-policy'}>Shipping & Delivery Policy</Link></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h4 className="text-[15px] text-[#24292E] font-[600] mb-4">Contact us</h4>
                            <ul className="space-y-2 text-sm">
                                <li className='flex text-[#24292E] items-center'><img src={email} className='mr-2' alt="" /> myprognozis@gmail.com</li>
                                <li className='flex text-[#24292E] items-center'><img src={phone} className='mr-2' alt="" /> 9597557036</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-black text-[14px] pl-10 md:pl-33 align-center text-[#ffffff] py-1 w-full'>
                © 2025 Aignoz. All Rights Reserved.
            </div>
        </>
    )
}

export default Footer;
