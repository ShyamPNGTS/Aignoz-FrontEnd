import React from 'react'

// Import images here
import img1 from "../../assets/images/about-section-1.png";
import img2 from "../../assets/images/about-section-2.png";
import img3 from "../../assets/images/about-section-3.png";
import img4 from "../../assets/images/about-section-4.png";
import achieve1 from "../../assets/images/doctor-achievement-1.png";
import achieve2 from "../../assets/images/doctor-achievement-2.png";
import achieve3 from "../../assets/images/doctor-achievement-3.png";
import achieve4 from "../../assets/images/doctor-achievement-4.png";

// Import icons here
import { HiOutlineCheckCircle } from "react-icons/hi";
import Experts from '../../components/experts';

const achieveImg = [
        {
           img : achieve1,
        },
        {
          img : achieve2,
        },
        {
          img : achieve3,
        },
        {
          img : achieve4,
        },
       
    ];

const About = () => {

  return (
    <>
      {/* Main Section  */}
      <div style={{
        backgroundImage: `url('/src/assets/images/about-section1-bg-1.png'), url('/src/assets/images/about-section1-bg-2.png')`,
        backgroundPosition: 'right bottom, left bottom',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'auto 350px, auto 200px',
      }} className="bg-contain bg-bottom pb-6 bg-no-repeat">
        <section className='section mt-14 flex flex-col md:flex-row items-center gap-8'>

          {/* Left Side - Text */}
          <div className="md:w-1/2">

            <h2 className="text-[64px]/20 font-[500] text-[#24292E] my-4">
              <span className='font-[600] text-primary-500'>Your Health,</span> Our Commitment
            </h2>
            <p className="text-[#383F45] text-[16px] md:text-lg">
              We are dedicated to providing comprehensive healthcare services that prioritize your well-being. Our experienced team of medical professionals delivers personalized care in a compassionate and supportive environment. Whether it's a routine checkup or specialized treatment, we are here to guide you every step of the way.
            </p>

          </div>
          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Descriptive Alt"
              className="w-[550px] rounded-md"
            />
          </div>
        </section>
      </div>

      {/* 2nd Section  */}
      <section className='section-about py-[100px] bg-gradient-to-r from-transparent to-primary-50 flex flex-col md:flex-row items-center gap-8'>

        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src={img2}
            alt="Descriptive Alt"
            className="w-[550px] rounded-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[64px]/20 font-[500] text-[#24292E] my-4">
            <span className='font-[600] text-primary-500'>Our Mission</span>
          </h2>
          <p className="text-[#383F45] text-[16px] md:text-lg">
            Our mission is simple: to deliver high-quality healthcare that is accessible, affordable, and personalized to meet the unique needs of every patient. We are dedicated to helping you achieve optimal health through expert medical care, advanced technology, and a compassionate, patient-first approach.
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-4'>
            <p> <span className='font-semibold text-primary-500 '>Accessible Care: </span> Making healthcare easy to reach for every patient.</p>
          </div>
          <div className='flex items-center mt-4 md:w-[100%] gap-4'>
            <p> <span className='font-semibold text-primary-500'>Affordable Services:</span> Cost-effective care without compromising quality.</p>
          </div>
          <div className='flex items-center mt-4 md:w-[100%] gap-4'>
            <p> <span className='font-semibold text-primary-500'>Personalized Treatment:</span> Tailored plans to fit individual needs.</p>
          </div>
          <div className='flex items-center mt-4 md:w-[100%] gap-4'>
            <p> <span className='font-semibold text-primary-500'>Expert-Led Approach:</span> Skilled professionals delivering trusted care.</p>
          </div>
          <div className='flex items-center mt-4 md:w-[100%] gap-4'>
            <p> <span className='font-semibold text-primary-500'>Technology-Driven Excellence:</span> Advanced tools for better outcomes.</p>
          </div>
        </div>
      </section>

      {/* 3rd Section  */}
      <section className='section-about bg-gradient-to-l from-transparent to-primary-50 flex flex-col md:flex-row items-center gap-8'>

        {/* Left Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[64px]/20 font-[500] text-[#24292E] my-4">
            <span className='font-[600] text-primary-500'>Our Vision</span>
          </h2>
          <p className="text-[#383F45] text-[16px] md:text-lg">
          We envision becoming a leading healthcare provider known for innovative treatments, a strong focus on patient care, and a seamless experience that allows you to feel supported throughout your healthcare journey.
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Committed to accessible and personalized medical care</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Led by expert doctors with years of experience</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Trusted by a growing community of satisfied patients</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Reach more patients and grow your practice.</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Making healthcare easy to reach for every patient.</p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src={img3}
            alt="Descriptive Alt"
            className="w-[550px] rounded-md"
          />
        </div>
      </section>

      {/* 4th Section  */}
      <section className='section-about bg-gradient-to-r from-transparent to-primary-50 flex flex-col md:flex-row items-center gap-8'>

         {/* Left Side - Image */}
         <div className="md:w-1/2">
          <img
            src={img4}
            alt="Descriptive Alt"
            className="w-[550px] rounded-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[64px]/20 font-[500] text-[#24292E] my-4">
            <span className='font-[600] text-primary-500'>Our History</span>
          </h2>
          <p className="text-[#383F45] text-[16px] md:text-lg">
          We began with a clear goal — to provide high-quality, affordable, and compassionate healthcare tailored to each patient's unique needs. Over the years, our commitment to excellence and a patient-first approach has helped us grow and build lasting trust in the community.
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Committed to accessible and personalized medical care</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Led by expert doctors with years of experience</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Trusted by a growing community of satisfied patients</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Reach more patients and grow your practice.</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
          <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Making healthcare easy to reach for every patient.</p>
          </div>
        </div>

      </section>

      {/* Meet the Experts Section  */}
      <section className='section'>
      <div className='xl:w-[60%] text-center mx-auto mt-14'>
          <h1 className='font-[600] text-[36px]'>Meet the Experts</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Your health is in safe hands with our expert medical team.</p>
        </div>
        <Experts/>
      </section>

      {/* Doctor's Achievement Section  */}
      <section className='section'>
      <div className='xl:w-[60%] text-center mx-auto mt-14'>
          <h1 className='font-[600] text-[36px]'>Our Achievements</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Our team of dedicated doctors has consistently set benchmarks in medical excellence, patient care, and innovation. Their achievements reflect a passion for healing and a commitment to advancing healthcare.</p>
        </div>
        <div className="relative mt-12 flex items-center">
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 flex-1">
        {achieveImg.map((doc) => (
            <div
              
                className="bg-white rounded-[12px] mb-10 shadow-lg" >
                <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full object-cover cursor-pointer rounded-[12px]"
                />
            </div>
        ))}
    </div>
</div>
      </section>


    </>
  )
}

export default About;
