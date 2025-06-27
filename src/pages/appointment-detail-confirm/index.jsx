import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

//Import Images here :
import doctorImg from '../../assets/images/appointment-doctor-img.png'

//Import Icons here :
import { FaStar } from 'react-icons/fa';
import locIcon from '../../assets/icons/doctor-location.png'
import langIcon from '../../assets/icons/doctor-language.png'
import calender from '../../assets/icons/appointment-calender.png'
import timeIcon from '../../assets/icons/doctor-availability.png'


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

const AppointmentConfirm = () => {

  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    terms: false,
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API or further actions here
  };

  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  if (!doctor) {
    return <p className="text-center mt-10 text-red-500">Doctor not found</p>;
  }
  return (
    <>
      <section className="section mt-4 flex-col md:flex-row flex gap-5">
        <div className="flex flex-col w-full lg:flex-row rounded-2xl shadow-md overflow-hidden p-4 relative">
          {/* Doctor Image */}
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full sm:w-40 h-40 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6"
          />

          {/* Doctor Info */}
          <div className="flex-1 relative">
            {/* Rating */}
            <div className="absolute top-0 right-0 flex items-center text-white rounded-full bg-green-500 px-2 py-1 text-sm font-semibold">
              <FaStar className="mr-1" /> {doctor.rating}
            </div>

            <h3 className="text-[24px] font-[600] text-[#1A1D1F] mb-1">{doctor.name}</h3>
            <p className="text-[14px] text-primary-500 font-[500]">
              {doctor.specialty} | {doctor.experience}
            </p>
            <p className="text-sm mt-3 text-gray-600">
              <span className="text-primary-500 font-[600] text-[13px]">Fees-</span> {doctor.fees}
            </p>
            <p className="text-sm mt-2 flex gap-2 text-gray-600">
              <img src={locIcon} className="w-6 h-6" alt="" /> {doctor.hospital}
            </p>
            <p className="text-sm flex items-center gap-2 text-gray-600 mt-2">
              <img src={calender} className="w-6 h-7" alt="" /> {selectedDate}
            </p>
            <p className="text-sm mt-2 flex gap-2 text-gray-600">
              <img src={timeIcon} className="w-6 h-6" alt="" /> {selectedTime}
            </p>
          </div>
        </div>
      </section>

      <section className='section my-8'>
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A]">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] ">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0A0A0A] ">Phone</label>
              <input
                name="phone"
                type="text"
                placeholder="+318 3366 494 955"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0A0A0A] ">Email</label>
              <input
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] ">DOB</label>
              <input
                name="dob"
                type="text"
                placeholder="MM/DD/YYYY"
                required
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] ">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0A0A0A]">Full Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full border-[#E5E7EA] border rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="accent-purple-500"
                />
                <span>I agree to the <Link to={'/terms-and-conditions'} className='text-primary-500 font-semibold hover:underline '>Terms & Conditions</Link></span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  name="updates"
                  type="checkbox"
                  checked={formData.updates}
                  onChange={handleChange}
                  className="accent-purple-500"
                />
                <span>I want to receive updates and tips</span>
              </label>
            </div>
          </div>

          <hr className="my-6 text-[#E7E5E4] " />

          <div className="">
            <button
              type="submit"
              disabled={!formData.terms}
              className="bg-primary-500 text-white font-[500] cursor-pointer text-[18px] py-2 px-10 rounded-full hover:opacity-90 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AppointmentConfirm
