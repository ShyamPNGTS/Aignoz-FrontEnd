import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import location from '../../assets/icons/contact-location.png';
import phone from '../../assets/icons/contact-phone.png';
import email from '../../assets/icons/contact-mail.png';

const Contact = () => {
  const [activeTab, setActiveTab] = useState("message");

  const tabs = ["message", "complaint", "feedback"];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    country: '',
    city: '',
    hospital: '',
    doctor: '',
    speciality: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      type: activeTab.toLowerCase()
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          country: '',
          city: '',
          hospital: '',
          doctor: '',
          speciality: '',
          message: ''
        });
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      alert("Server Error: " + error.message);
    }
  };
  return (
    <>
      {/**Hero Section */}
      <section className="relative bg-[url('/src/assets/images/contact-bg.png')] bg-cover bg-center h-[50vh] md:min-h-[80vh] w-full">
        <div className="absolute w-[90%] flex flex-col justify-center items-center h-[50vh] md:min-h-[80vh] left-1/2 transform -translate-x-1/2 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            We're Here to Help You
          </h1>
          <p className="text-[#FAFAFA] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Whether you have questions, need support, or want to schedule a visit, feel free to reach out. We’re always ready to assist.
          </p>
        </div>
      </section>

      {/**Forms Section */}
      <section className='section my-10'>
        {/* Query Type Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <p className='text-[22px] mr-3 text-primary-500 '>Types of query :</p>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 cursor-pointer rounded-full border border-primary-500 font-medium capitalize ${activeTab === tab ? "bg-primary-500 text-white" : "border-gray-300 text-primary-500"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg p-6">
          <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Full Name" className="border border-gray-300 p-3 rounded-md w-full" required />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email ID" className="border border-gray-300 p-3 rounded-md w-full" required />
          <input name="contact" value={formData.contact} onChange={handleChange} pattern="[0-9]{10}" maxLength={10} type='tel' placeholder="Contact" className="border border-gray-300 p-3 rounded-md w-full" required />
          <input name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Country" className="border border-gray-300 p-3 rounded-md w-full" required />

          <div className="relative w-full">
            <select name="city" value={formData.city} onChange={handleChange} className="appearance-none border border-gray-300 p-3 pr-10 rounded-md w-full" required>
              <option value="">Select City</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          <div className="relative w-full">
            <select name="hospital" value={formData.hospital} onChange={handleChange} className="appearance-none border border-gray-300 p-3 pr-10 rounded-md w-full" required>
              <option value="">Select Hospital</option>
              <option>Fortis</option>
              <option>Apollo</option>
              <option>Gitanjali</option>
            </select>
            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          <div className="relative w-full">
            <select name="doctor" value={formData.doctor} onChange={handleChange} className="appearance-none border border-gray-300 p-3 pr-10 rounded-md w-full" required>
              <option value="">Select Doctor</option>
              <option>Dr. Smith</option>
              <option>Dr. Mehta</option>
              <option>Dr. Sharma</option>
            </select>
            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          <div className="relative w-full">
            <select name="speciality" value={formData.speciality} onChange={handleChange} className="appearance-none border border-gray-300 p-3 pr-10 rounded-md w-full" required>
              <option value="">Select Speciality</option>
              <option>Orthology</option>
              <option>Cardiology</option>
              <option>Pathology</option>
            </select>
            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder={activeTab} className="border border-gray-300 p-3 rounded-md w-full" required />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-start">
            <button type="submit" className="bg-primary-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-600 transition">
              Submit
            </button>
          </div>
          <p className="text-[16px] text-primary-500">You can also write to us at aignoz@abc.com</p>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 pt-12 px-4 md:px-0">

          {/* Location Card */}
          <div className="flex gap-4 flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <img src={location} alt="" className='w-20' />
            <h3 className="text-[20px] font-[500] text-gray-800 mb-2">LOCATION</h3>
            <p className="text-[#404040] text-[16px] font-[400] ">Aignoz HealthCare, 2nd Floor, Wellness Tower, Main Street, Indore</p>
          </div>

          {/* Call Us Card */}
          <div className="flex gap-4 flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <img src={phone} alt="" className='w-20' />
            <h3 className="text-[20px] font-[500] text-gray-800 mb-2">CALL US</h3>
            <p className="text-[#404040] text-[16px] font-[400]">+91 98765 43210</p>
          </div>

          {/* Email Card */}
          <div className="flex gap-4 flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <img src={email} alt="" className='w-20' />
            <h3 className="text-[20px] font-[500] text-gray-800 mb-2">EMAIL</h3>
            <p className="text-[#404040] text-[16px] font-[400]">support@aignoz.com</p>
          </div>

        </div>

      </section>


    </>
  )
}

export default Contact;
