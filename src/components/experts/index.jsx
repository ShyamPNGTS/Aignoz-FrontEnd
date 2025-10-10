import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import cardImg from "../../assets/images/about-experts-img.png"
import doc1 from "../../assets/images/doc-1.jpg"
import doc2 from "../../assets/images/doc-2.jpg"
import doc3 from "../../assets/images/doc-3.jpg"
import doc4 from "../../assets/images/doc-4.jpg"
import doc5 from "../../assets/images/doc-5.jpg"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const experts = [
  {
    id: 1,
    name: "Dr. Srinidhi B V",
    speciality: "Cardiologist",
    description:
      "Dr. Sharma specializes in heart health, with expertise in managing hypertension, arrhythmias, and preventive cardiac care.",
    image: doc1,
  },
  {
    id: 2,
    name: "Dr. Shweta K V",
    speciality: "Dermatologist",
    description:
      "Dr. Verma provides advanced treatments for skin, hair, and nail disorders, including acne, eczema, and cosmetic dermatology.",
    image: doc2,
  },
  {
    id: 3,
    name: "Dr. Kavit Menon",
    speciality: "Pediatrician",
    description:
      "With over 12 years of experience, Dr. Menon is dedicated to children’s health, covering growth, vaccinations, and nutrition.",
    image: cardImg,
  },
  {
    id: 4,
    name: "Dr. Rakesh Gupta",
    speciality: "Orthopedic Surgeon",
    description:
      "Dr. Gupta is an expert in treating bone, joint, and spine conditions, specializing in sports injuries and joint replacements.",
    image: doc3,
  },
  {
    id: 5,
    name: "Dr. Neha Kapoor",
    speciality: "Gynecologist",
    description:
      "Dr. Kapoor focuses on women’s health, offering care in pregnancy, fertility, menstrual health, and preventive screenings.",
    image: doc4,
  },
  {
    id: 6,
    name: "Dr. Sanjay Rao",
    speciality: "Neurologist",
    description:
      "Dr. Rao is experienced in diagnosing and managing neurological disorders such as epilepsy, stroke, migraines, and dementia.",
    image: doc5,
  },
];



const Experts = () => {
  return (
    <div className="relative mt-12 flex items-center">
    {/* Cards */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
        {experts.map((doc) => (
            <div
                key={doc.id}
                className="bg-white p-4 rounded-[20px] shadow-lg drop-shadow-[0_4px_8px_rgba(221, 124, 254, 0.4)]" >
                <img
                    src={doc.image}
                    alt={doc.name}
                    className="mx-auto h-80 rounded-md mb-4"
                />
                <div className='flex justify-between'>
                    <h3 className="text-[26px] font-[500] text-[#1A1D1F]">{doc?.name}</h3>
                </div>
                <p className="text-[18px] mt-4 font-[600] text-[#24292E]">Speciality: <span className='font-[500] text-primary-500'>{doc.speciality}</span></p>
                <p className="text-[18px] mt-4 text-[#454C52]">{doc.description}</p>
                
            </div>
        ))}
    </div>



</div>
  )
}

export default Experts;
