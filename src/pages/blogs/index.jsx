import React, { useRef } from 'react'
import HealthInsights from '../../components/health-insights';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";


const categories = ["All", "Wellness Tips", "Children's Health", "Women's Health", "Nutrition & Lifestyle", "Technology and Lifestyle", "Doctor's Advice", "Physically Fitness", "Motivation"];

const Blogs = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 200;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('/src/assets/images/blogs-hero.png')] bg-cover bg-center h-[50vh] md:min-h-screen w-full">
        <div className="absolute w-[90%] bottom-10 md:bottom-26 left-1/2 transform -translate-x-1/2 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Stay Informed, Stay Healthy
          </h1>
          <p className="text-[#FAFAFA] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Discover expert advice, healthcare tips, and wellness insights curated by our medical professionals.
          </p>
        </div>
      </section>


      {/* Detailed Health Insights Section*/}
      <section className='section mb-12'>
        <div className='xl:w-[60%] text-center mx-auto mt-6'>
          <h1 className='font-[600] text-[36px]'>Explore Our Health Insights</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Get expert advice, tips and the latest health trends to empower your well-being</p>
        </div>
        <div className="relative mt-14 w-full">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
          >
            <HiArrowNarrowLeft className="text-primary-500 text-xl" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-10 px-10"
          >
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="whitespace-nowrap borde cursor-pointer border-primary-500 text-primary-500 px-4 py-2 rounded-full hover:bg-primary-500 hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
          >
            <HiArrowNarrowRight className="text-primary-500 text-xl" />
          </button>
        </div>

        <div className="bg-[#BE34EA1A] p-2 rounded-full w-full mt-8">
          <div className="flex items-center space-x-2 px-4">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>


            <input
              type="text"
              placeholder="Search by name, specialty, or condition..."
              className="bg-transparent w-full py-1 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>


        <HealthInsights />
      </section>
    </>
  )
}

export default Blogs;
