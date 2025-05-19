import React, { useState } from 'react'

const Contact = () => {
    const [activeTab, setActiveTab] = useState("Message");

  const tabs = ["Message", "complaint", "feedback"];
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
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <p className='text-[22px] mr-3 text-primary-500 '>
            Types of query : 
        </p>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 cursor-pointer rounded-full border border-primary-500 font-medium capitalize ${
              activeTab === tab
                ? "bg-primary-500 text-white"
                : "border-gray-300 text-primary-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white  rounded-lg p-6">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <input
          type="email"
          placeholder="Email ID"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <input
          type="tel"
          placeholder="Contact"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <input
          type="text"
          placeholder="Country"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <select required className="border border-gray-300 p-3 rounded-md w-full">
          <option>Select City</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <select required className="border border-gray-300 p-3 rounded-md w-full">
          <option>Select Hospital</option>
          <option>Fortis</option>
          <option>Apollo</option>
        </select>
        <select required className="border border-gray-300 p-3 rounded-md w-full">
          <option>Select Doctor</option>
          <option>Dr. Smith</option>
          <option>Dr. Mehta</option>
        </select>
        <select required className="border border-gray-300 p-3 rounded-md w-full">
          <option>Select Speciality</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
        </select>

        {/* Textarea (full width) */}
        <div required className="col-span-1 md:col-span-2">
          <textarea
            rows={4}
            placeholder= {activeTab === "Message" ? "Message" : activeTab === "complaint" ? "Complaint" : "Feedback"}
            className="border border-gray-300 p-3 rounded-md w-full"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-primary-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-600 transition"
          >
            Submit
          </button>
        </div>
        <p className='text-[16px] text-primary-500 '>
            You can also write to us at aignoz@abc.com 
        </p>
      </form>
      
      </section>


    </>
  )
}

export default Contact;
