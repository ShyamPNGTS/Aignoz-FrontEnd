import React from 'react'
import { useParams } from 'react-router-dom';
import cardImg from "../../assets/images/HealthInsight.png"
import HealthInsights from '../../components/health-insights';

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

const BlogDetail = () => {
    const { id } = useParams();
  const blog = doctors.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-6">Blog not found</div>;
  return (
    <>
     {/* Hero Section */}
      <section className="relative bg-[url('/src/assets/images/blog-detail-hero.png')] bg-cover bg-center h-[50vh] md:min-h-[90vh] w-full">
        <div className="absolute w-max gap-2 sm:gap-4 md:gap-14 flex -right-45 md:-right-68 bottom-2 md:bottom-3  transform -translate-x-1/2  px-4">

          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-[19px] max-w-2xl mx-auto">
           Published on: April 20, 2025
          </p>
          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-xl max-w-2xl mx-auto">
           By: Dr. Anjali Mehta
          </p>
          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-xl max-w-2xl mx-auto">
           3 min read
          </p>
        </div>
      </section>

      {/* Detail Page Section */}
      <section className='section'>
        <button className="px-6 py-2 mt-10 rounded-full border border-primary-500 text-black font-[400] capitalize">
            Women's Health
          </button>
        
        <h1 className='text-primary-500 font-[500] text-[38px] mt-10 '>5 Daily Habits for a Healthier Life</h1>

        <p className='text-[17px] mt-5 text-[#383F45]'>Adopting small, healthy habits every day can have a significant impact on your overall well-being. Whether it’s improving your physical health or boosting your mental clarity, the choices you make every day set the tone for a healthier lifestyle.</p>

        <ul className='text-[17px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
            <li className='text-[17px]  text-[#383F45] font-[400]'>Stay Hydrated</li>
            <li className='text-[17px] text-[#383F45] font-[400]'>Get Moving</li>
            <li className='text-[17px] text-[#383F45] font-[400]'>Prioritize Sleep</li>
            <li className='text-[17px] text-[#383F45] font-[400]'>Eat a Balanced Diet</li>
            <li className='text-[17px] text-[#383F45] font-[400]'>Practice Mindfulness</li>
        </ul>

        <h1 className='text-[34px] text-[#262626] mt-10 font-[500] '>Stay Hydrated</h1>

                <p className='text-[17px] mt-3 text-[#383F45] font-[400] '>Water is more than a thirst quencher—it plays a vital role in regulating body temperature, aiding digestion, and delivering nutrients to cells. Dehydration can lead to fatigue, headaches, and poor concentration. Make it a habit to drink at least 8 glasses a day, and consider keeping a water bottle with you throughout the day. Adding lemon, mint, or cucumber can make hydration more enjoyable and refreshing.</p>

                <h1 className='text-[34px] text-[#262626] mt-10 font-[500] '>Get Moving</h1>

                <p className='text-[17px] mt-3 text-[#383F45] font-[400] '>Water is more than a thirst quencher—it plays a vital role in regulating body temperature, aiding digestion, and delivering nutrients to cells. Dehydration can lead to fatigue, headaches, and poor concentration. Make it a habit to drink at least 8 glasses a day, and consider keeping a water bottle with you throughout the day. Adding lemon, mint, or cucumber can make hydration more enjoyable and refreshing.</p>

                <h1 className='text-[34px] text-[#262626] mt-10 font-[500] '>Prioritize Sleep</h1>

                <p className='text-[17px] mt-3 text-[#383F45] font-[400] '>Water is more than a thirst quencher—it plays a vital role in regulating body temperature, aiding digestion, and delivering nutrients to cells. Dehydration can lead to fatigue, headaches, and poor concentration. Make it a habit to drink at least 8 glasses a day, and consider keeping a water bottle with you throughout the day. Adding lemon, mint, or cucumber can make hydration more enjoyable and refreshing.</p>

                <h1 className='text-[34px] text-[#262626] mt-10 font-[500]'>Eat a Balanced Diet</h1>

                <p className='text-[17px] mt-3 text-[#383F45] font-[400] '>Water is more than a thirst quencher—it plays a vital role in regulating body temperature, aiding digestion, and delivering nutrients to cells. Dehydration can lead to fatigue, headaches, and poor concentration. Make it a habit to drink at least 8 glasses a day, and consider keeping a water bottle with you throughout the day. Adding lemon, mint, or cucumber can make hydration more enjoyable and refreshing.</p>

                <h1 className='text-[34px] text-[#262626] mt-10 font-[500]'>Practice Mindfulness</h1>

                <p className='text-[17px] mt-3 text-[#383F45] font-[400] '>Water is more than a thirst quencher—it plays a vital role in regulating body temperature, aiding digestion, and delivering nutrients to cells. Dehydration can lead to fatigue, headaches, and poor concentration. Make it a habit to drink at least 8 glasses a day, and consider keeping a water bottle with you throughout the day. Adding lemon, mint, or cucumber can make hydration more enjoyable and refreshing.</p>
      </section>

      {/* Health Insights Section  */}
      <section className='section'>
      <div className='xl:w-[60%] text-center mx-auto mt-6'>
          <h1 className='font-[600] text-[36px]'>Explore Our Health Insights</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Get expert advice, tips, and the latest health trends to empower your well-being.</p>
        </div>
        <HealthInsights limit={3}/>
      </section>
    </>
  )
}

export default BlogDetail
