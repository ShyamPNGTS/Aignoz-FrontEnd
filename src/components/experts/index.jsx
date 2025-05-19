import React from 'react'

import cardImg from "../../assets/images/about-experts-img.png"

 const experts = [
        {
            id: 1,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages. ",
            image: cardImg,
        },
        {
            id: 2,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages. ",
            image: cardImg,
        },
        {
            id: 3,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages. ",
            image: cardImg,
        },
        {
            id: 4,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages.",
            image: cardImg,
        },
        {
            id: 5,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages.",
            image: cardImg,
        },
        {
            id: 6,
            name: "Dr. Rahul Jain",
            speciality: "General Physician",
            description: "With over 10 years of experience, Dr. Khan provides holistic care and expert medical advice for patients of all ages.",
            image: cardImg,
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
                className="bg-white p-4 rounded-[12px] shadow-lg shadow-primary-100" >
                <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full object-cover rounded-md mb-4"
                />
                <div className='flex justify-between'>
                    <h3 className="text-[26px] font-[500] text-[#1A1D1F]">{doc.name}</h3>
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
