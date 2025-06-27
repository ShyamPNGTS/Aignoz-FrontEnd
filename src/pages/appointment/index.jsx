import React from 'react'
import AppointmentImage from '../../assets/images/appointment-hero.png'
import { LuMapPin } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';


//Import Images here :
import doctorImg from '../../assets/images/appointment-doctor-img.png'

//Import Icons here :
import { FaStar } from 'react-icons/fa';
import locIcon from '../../assets/icons/doctor-location.png'
import langIcon from '../../assets/icons/doctor-language.png'
import eduIcon from '../../assets/icons/doctor-education.png'
import timeIcon from '../../assets/icons/doctor-availability.png'
import { Link, useNavigate } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    image: doctorImg,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    fees: "₹1000",
    hospital: "City Heart Clinic",
    languages: ["English", "Hindi"],
    availableTime: "Mon-Fri, 10 AM - 4 PM",
    description: "Expert in interventional cardiology with a compassionate approach.",
    rating: 4.8
  },
  {
    id: 2,
    image: doctorImg,
    name: "Dr. Arpita Mehta",
    specialty: "Dermatologist",
    experience: "8 years",
    fees: "₹800",
    hospital: "SkinCare Hospital",
    languages: ["English", "Tamil"],
    availableTime: "Tue-Sat, 11 AM - 6 PM",
    description: "Specializes in cosmetic treatments and chronic skin conditions.",
    rating: 4.5
  },
  {
    id: 3,
    image: doctorImg,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    fees: "₹1000",
    hospital: "City Heart Clinic",
    languages: ["English", "Hindi"],
    availableTime: "Mon-Fri, 10 AM - 4 PM",
    description: "Expert in interventional cardiology with a compassionate approach.",
    rating: 4.8
  },
  {
    id: 4,
    image: doctorImg,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    fees: "₹1000",
    hospital: "City Heart Clinic",
    languages: ["English", "Hindi"],
    availableTime: "Mon-Fri, 10 AM - 4 PM",
    description: "Expert in interventional cardiology with a compassionate approach.",
    rating: 4.8
  },
  {
    id: 5,
    image: doctorImg,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    fees: "₹1000",
    hospital: "City Heart Clinic",
    languages: ["English", "Hindi"],
    availableTime: "Mon-Fri, 10 AM - 4 PM",
    description: "Expert in interventional cardiology with a compassionate approach.",
    rating: 4.8
  },

];



const Appointment = () => {

    const navigate = useNavigate();

    const handleClick = (doc) => {
    const token = localStorage.getItem("token");
    console.log("Token here : ", token) 

    if (token) {
      navigate(`/appointment/${doc.id}`);
       console.log("id here : ", doc.id) 
    } else {
      navigate("/login"); 
      console.log("Hheheh log in here") 
    }
  };


    return (
        <>
            {/* Top Section  */}
            <section className='section-about py-6 bg-[#BE34EA0D] md:h-[80vh] flex flex-col-reverse md:flex-row items-center gap-14'>

                {/* Left Side - Text */}
                <div className="md:w-1/2">

                    <h2 className="my-4">
                        <span className='font-[500] text-[36px] text-[#1A1D1F] '>Your Health, Our Priority — Schedule Care with Trusted Experts</span>
                    </h2>
                    <p className="text-[#383F45] text-[16px] md:text-lg">
                        Connect with experienced specialists and receive the care you need, right when you need it. Browse doctor profiles, check availability, and make informed choices—all in one place.
                    </p>
                    <button className="bg-primary-500 mt-8 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-700 transition">
                        Book Appointment
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2">
                    <img
                        src={AppointmentImage}
                        alt="Descriptive Alt"
                        className="w-[550px] border-8 border-[#BE34EA66] rounded-[36px]"
                    />
                </div>
            </section>

            {/* Doctor Listing - Paragraph Section  */}
            <section className='section'>
                <div className='xl:w-[80%] text-center mx-auto mt-14'>
                    <h1 className='font-[500] text-[34px]'>Doctor Listings with Comprehensive Profiles</h1>
                    <p className='text-[17px] mt-2 text-[#383F45] '>Find the right healthcare professional with ease. Each doctor card is thoughtfully designed to highlight the most important details at a glance, helping you make confident, informed decisions about your care.</p>
                </div>
            </section>

            {/* Doctor Listing - Filter Section  */}
            <section className='section mt-6'>
                <h2 className="text-[24px] font-[500] text-[#1A1D1F] mb-8">Book Appointment</h2>

                {/* Search Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    <div className="relative">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by name, specialty, etc"
                            className="w-full p-3 pl-10 rounded-lg bg-[#BE34EA1A] placeholder:text-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="relative">
                        <LuMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Find location"
                            className="w-full p-3 pl-10 rounded-lg bg-[#BE34EA1A] placeholder:text-gray-600 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                    <select className="w-max px-3 py-2 rounded-full border-2 border-primary-300 text-gray-700 focus:outline-none">
                        <option>Select Specialty</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Orthopedics</option>
                    </select>

                    <select className="w-max  px-3 py-2 rounded-full border-2 border-primary-300 text-gray-700 focus:outline-none">
                        <option>Availability</option>
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Week</option>
                    </select>

                    <select className="w-max  px-3 py-2 rounded-full border-2 border-primary-300 text-gray-700 focus:outline-none">
                        <option>Consultation Type</option>
                        <option>In-person</option>
                        <option>Online</option>
                    </select>
                </div>
            </section>

            {/* Doctor Listing - Cards Section  */}
            <section className="section mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {doctors.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex flex-col  lg:flex-row  rounded-2xl shadow-md overflow-hidden p-4 relative"
                        >
                            {/* Doctor Image */}
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full sm:w-40 h-40 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6"
                            />

                            {/* Doctor Info */}
                            <div className="flex-1 relative">
                                {/* Rating */}
                                <div className="absolute top-0 right-0 flex items-center text-white rounded-full bg-green-500 px-2 py-1 text-sm font-semibold">
                                    <FaStar className="mr-1" /> {doc.rating}
                                </div>

                                <h3 className="text-[24px] font-[600] text-[#1A1D1F] mb-1">{doc.name}</h3>
                                <p className="text-[14px] text-primary-500 font-[500]">{doc.specialty}  |  {doc.experience}</p>
                                <p className="text-sm mt-3 text-gray-600"><span className='text-primary-500 font-[600] text-[13px] '>Fees-</span> {doc.fees}</p>
                                <p className="text-sm mt-2 items-center flex gap-2 text-gray-600"><img src={locIcon} className='w-6 h-6' alt="" /> {doc.hospital}</p>
                                <p className="text-sm mt-2 items-center flex gap-2 text-gray-600"><img src={langIcon} className='w-6 h-6' alt="" /> {doc.languages.join(", ")}</p>
                                <p className="text-sm mt-2 items-center flex gap-2 text-gray-600"><img src={timeIcon} className='w-6 h-6' alt="" /> {doc.availableTime}</p>
                                <p className="text-sm flex items-center gap-2 text-gray-600 mt-2"><img src={eduIcon} className='w-6 h-7' alt="" /> {doc.description}</p>

                                {/* Button */}
                                
                                <button onClick={() => handleClick(doc)} className="mt-4 cursor-pointer bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Appointment;
