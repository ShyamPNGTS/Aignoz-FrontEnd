import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

//Import Images here :
import doctorImg from '../../assets/images/appointment-doctor-img.png'

//Import Icons here :
import { FaStar } from 'react-icons/fa';
import locIcon from '../../assets/icons/doctor-location.png'
import langIcon from '../../assets/icons/doctor-language.png'
import eduIcon from '../../assets/icons/doctor-education.png'
import timeIcon from '../../assets/icons/doctor-availability.png'
import AppointmentSlots from '../../components/appointment-slots';

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

const AppointmentDetail = () => {
    const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id)); // Convert id from string to number

  if (!doctor) {
    return <p className="text-center mt-10 text-red-500">Doctor not found</p>;
  }

  const [activeTab, setActiveTab] = useState("OVERVIEW");

   const tabs = ["OVERVIEW", "EXPERIENCE", "REACHES & PUBLICATION"];
  
  return (
    <>
   {/**Doctor Name */}
    <section className='section'>
        <div className='py-2 px-5 mt-7 border w-max border-primary-500 text-primary-500 rounded-full'>{doctor.name}</div>
    </section>

     {/**Doctor Card and Slot Booking boxes */}
     <section className="section mt-4 flex-col md:flex-row flex gap-5">
      <div className="flex flex-col lg:flex-row rounded-2xl shadow-md overflow-hidden p-4 relative">
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
          <p className="text-sm mt-2 flex gap-2 text-gray-600">
            <img src={timeIcon} className="w-6 h-6" alt="" /> {doctor.availableTime}
          </p>
          <p className="text-sm mt-2 flex gap-2 text-gray-600">
            <img src={langIcon} className="w-6 h-6" alt="" /> {doctor.languages.join(", ")}
          </p>
          <p className="text-sm flex items-center gap-2 text-gray-600 mt-2">
            <img src={eduIcon} className="w-6 h-7" alt="" /> {doctor.description}
          </p>
        </div>
      </div>
      <AppointmentSlots/>
    </section>

    {/**Doctors Overview Tabs */}
   <section className='section my-12'>
    <div className="flex flex-wrap gap-4 mb-8">
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
      <div className='bg-[#BE34EA0A] mt-16 rounded-xl p-8 md:p-16 '>
        { activeTab == 'OVERVIEW' && (
            <div>
                <h1 className='text-[#000000] my-2 text-[24px] font-[500] '>OVERVIEW</h1>

                <p className='text-[16px] my-4 text-[#262626] font-[400] '>Dr. Anjali Verma is a skilled and compassionate Cardiologist, currently practicing at a leading healthcare institution. With 6 years of dedicated experience in the field of cardiology, she brings a focused approach to diagnosing and managing complex heart conditions. Her academic journey, including a post-doctoral fellowship in cardiac electrophysiology and pacing, reflects her commitment to mastering specialized areas of heart care.</p>

                <p className='text-[16px] my-4 text-[#262626] font-[400] '>She is known for her empathetic and detail-oriented approach, always prioritizing her patients’ comfort and understanding of their health. Dr. Verma treats a wide range of cardiovascular issues, including arrhythmias, heart failure, and coronary artery disease, using evidence-based practices to ensure effective outcomes.</p>

                <p className='text-[16px] my-4 text-[#262626] font-[400] '>In addition to clinical care, she emphasizes patient education—empowering individuals to take charge of their heart health through lifestyle changes and informed choices. Her multilingual abilities help her communicate clearly with patients from diverse backgrounds, building trust and long-term care relationships.</p>

                <p className='text-[16px] my-4 text-[#262626] font-[400] '>Passionate about continuous learning, Dr. Verma regularly participates in medical conferences and collaborates with fellow specialists to stay at the forefront of cardiac innovations. Her dedication to personalized care and excellence makes her a respected and reliable name in cardiology.</p>
            </div>
        )}
        { activeTab == 'EXPERIENCE' && (
            <div>
                <h1 className='text-[#000000] my-2 text-[24px] font-[500] '>EXPERIENCE</h1>

                <p className='text-[16px] my-4 text-[#262626] font-[400] '>Dr. Anjali Verma has been working as a Consultant Cardiologist at Medivista Heart Institute, Mumbai since 2020, where she specializes in cardiac electrophysiology and pacing. With a strong focus on patient-centric care, she handles complex cardiac cases, performs interventional procedures, and actively contributes to multidisciplinary treatment planning and ongoing clinical advancements.</p>
            </div>
        )}
        { activeTab == 'REACHES & PUBLICATION' && (
            <div>
                <h1 className='text-[#000000] my-2 text-[24px] font-[500] '>REACHES & PUBLICATION</h1>
                <ul className='list-disc'>
                    <li className='text-[16px] my-4 text-[#262626] font-[400] '>Renal Function Tests in Patients of Cirrhosis of Liver Investigated the correlation betweenv hepatic dysfunction and renal performance in cirrhotic patients.</li>
                    <li className='text-[16px] my-4 text-[#262626] font-[400] '>Renal Function Tests in Patients of Cirrhosis of Liver Investigated the correlation betweenv hepatic dysfunction and renal performance in cirrhotic patients.</li>
                    <li className='text-[16px] my-4 text-[#262626] font-[400] '>Renal Function Tests in Patients of Cirrhosis of Liver Investigated the correlation betweenv hepatic dysfunction and renal performance in cirrhotic patients.</li>
                </ul>
            </div>
        )}
      </div>
   </section>
    </>
  )
}

export default AppointmentDetail;
