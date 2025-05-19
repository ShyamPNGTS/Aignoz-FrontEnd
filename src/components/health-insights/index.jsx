import React from 'react'

import cardImg from "../../assets/images/HealthInsight.png"
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HealthInsights = ({limit}) => {
    const doctors = [
        {
            id: 1,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 2,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 3,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 4,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 5,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 6,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 7,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 8,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
        {
            id: 9,
            name: "5 Daily Habits for a Healthier Life",
            description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
            image: cardImg,
        },
    ];

    
    return (
        <div className="relative mt-10 flex items-center">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
                {doctors.slice(0, limit ?? doctors.length).map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-white p-4 rounded-[12px] bg-no-repeat bg-bottom-left bg-[url('/src/assets/images/HealthInsight-card-bg.png')] shadow-lg drop-shadow-[0_4px_8px_rgba(221, 124, 254, 0.4)]"
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-full object-cover rounded-md mb-4"
                        />
                        <div className='flex justify-between'>
                            <h3 className="text-[20px] font-[600] text-[#1A1D1F]">{doc.name}</h3>
                        </div>
                        <p className="text-[14px] mt-4 text-[#454C52]">{doc.description}</p>
                        <div className='flex justify-end mt-4'>
                        <Link to={`/blogs/${doc.id}`}>
                        <button className="bg-primary-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-700 transition">
                            Read more
                        </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HealthInsights;
