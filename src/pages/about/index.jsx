import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import images here
import img1 from "../../assets/images/about-section-1.png";
import img2 from "../../assets/images/about-section-2.png";
import img3 from "../../assets/images/about-section-3.png";
import img4 from "../../assets/images/about-section-4.png";
import achieve1 from "../../assets/images/doctor-achievement-1.png";
import achieve2 from "../../assets/images/doctor-achievement-2.png";
import achieve3 from "../../assets/images/doctor-achievement-3.png";
import achieve4 from "../../assets/images/doctor-achievement-4.png";

import doc1 from "../../assets/images/doc-1.jpg"
import doc2 from "../../assets/images/doc-2.jpg"
import doc3 from "../../assets/images/doc-3.jpg"


// Import icons here
import { HiOutlineCheckCircle } from "react-icons/hi";
import Experts from '../../components/experts';

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


const achieveImg = [
  {
    img: achieve1,
  },
  {
    img: achieve2,
  },
  {
    img: achieve3,
  },
  {
    img: achieve4,
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
        <section className='section mt-6 md:mt-14 flex flex-col md:flex-row items-center gap-8'>

          {/* Left Side - Text */}
          <div className="md:w-1/2">

            <h2 className="text-[50px]/14 md:text-[64px]/20 font-[500] text-[#24292E] my-4">
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
              className="w-[550px] rounded-4xl"
            />
          </div>
        </section>
      </div>

      {/* 2nd Section  */}
      <section className='section-about py-[100px] bg-gradient-to-r from-transparent to-primary-50 flex flex-col-reverse md:flex-row items-center gap-8'>

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
            At Aignoz, our mission is to make healthcare smarter, faster, and more accessible by combining the power of AI-driven symptom assessment with expert online doctor consultations.
          </p>
          <p className="text-[#383F45] mt-6 text-[16px] md:text-lg">
            We believe every patient deserves timely care. That’s why your journey with Aignoz starts by interacting with our intelligent AI chatbot, which listens to your symptoms, asks relevant health questions, and instantly generates a detailed diagnostic report. This report is then shared with our certified doctors, enabling them to provide personalized and informed medical consultation—all from the comfort of your home.

          </p>
          {/* <div className='flex items-center mt-6 md:w-[100%] gap-4'>
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
          </div> */}
        </div>
      </section>

      {/* 3rd Section  */}
      <section className='section-about bg-gradient-to-l from-transparent to-primary-50 flex flex-col md:flex-row items-center gap-8'>

        {/* Left Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[54px]/20 font-[500] text-[#24292E] my-4">
            {/* <span className='font-[600] text-primary-500'>Our Vision</span> */}
            <span className='font-[600] text-primary-500'>Together at AIGNOZ</span>
          </h2>
          {/* <p className="text-[#383F45] text-[16px] md:text-lg">
            We envision a future where smart technology and compassionate care work hand in hand to transform how people access healthcare.
          </p> */}
          <p className="text-[#383F45] text-[16px] md:text-lg">
            Dr. Srinidhi, Shweta & Lalith Aravindan combine medical insight, computational
            innovation, and strategic vision in AI to create a platform that redefines healthcare from
            reactive treatment to proactive wellness.
          </p>

          {/* <p className="text-[#383F45] mt-6 text-[16px] md:text-lg">
            At Aignoz, our vision is to become a trusted leader in AI-assisted online medical consultations, offering every patient a seamless and informed healthcare experience—from their first interaction with our AI chatbot to their consultation with a certified doctor.
          </p> */}
          <p className="text-[#383F45] mt-6 text-[16px] md:text-lg">
            Under their leadership, AIGNOZ is developing next-generation solutions in Genomics,
            personalized vaccines, quantum health computing, stem cell regeneration, and
            AI-assisted clinical decision systems — shaping the future of intelligent, individualized
            care.
          </p>


          {/* <div className='flex items-center mt-6 md:w-[100%] gap-2'>
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
          </div> */}
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
      <section className='section-about bg-gradient-to-r from-transparent to-primary-50 flex flex-col-reverse md:flex-row items-center gap-8'>

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
            Aignoz began with a mission to simplify healthcare using smart technology.
            We introduced an AI chatbot that evaluates symptoms before doctor consultations.
            This innovation has shaped our journey toward faster, more informed care.
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Launched India’s first AI-powered pre-diagnosis chatbot</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Enabled online consultations for safe, remote medical advice</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Built trust with a growing community of satisfied patients</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Combined technology with compassionate care</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Evolved as a patient-first, innovation-led platform</p>
          </div>
        </div>

      </section>

       <section className='section-about bg-gradient-to-r from-transparent to-primary-50 flex flex-col-reverse md:flex-row items-center gap-8'>

        {/* Left Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[64px]/20 font-[500] text-[#24292E] my-4">
            <span className='font-[600] text-primary-500'> Research & Development</span>
          </h2>
          <p className="text-[#383F45] text-[16px] md:text-lg">
           We provide expertise for brain storming in  Research & Development
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p> AI-augmented diagnostic intelligence systems(Dr.GPD) </p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Genomics-driven disease risk modeling </p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Synthetic data generation for rare disease research </p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Quantum-biological simulations for drug and vaccine discovery</p>
          </div>
        </div>

         {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Descriptive Alt"
            className="w-[550px] rounded-md"
          />
        </div>

      </section>

      {/* Founders & Leadership Section */}
      <section className="section-about bg-gradient-to-r from-transparent to-primary-50 py-16">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] md:text-[42px] font-semibold text-[#24292E]">
            Founders & Leadership
          </h1>
          <p className="text-[18px] mt-3 text-[#383F45] max-w-5xl mx-auto">
            At the heart of AIGNOZ are two pioneering minds dedicated to transforming
            how humanity understands, prevents, and treats disease.
            Their shared vision — to make healthcare personalized, predictive, and
            preventive — drives the company’s mission of integrating artificial intelligence
            with molecular and regenerative medicine.
          </p>
        </div>

        {/* Dr. Srinidhi B.V */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <img
              src={doc1}
              alt="Dr. Srinidhi B.V"
              className="w-[400px] rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-[36px] font-semibold text-[#24292E] mb-2">
              Dr. Srinidhi B.V — <span className="text-primary-500">Founder & CEO</span>
            </h2>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Dr. Srinidhi B.V is a visionary medical innovator passionate about merging artificial intelligence, molecular biology, and genomic science to redefine the future of healthcare. His pioneering work spans AI-driven diagnosis, personalized vaccine design, and regenerative medicine, with a focus on creating dynamic, adaptive treatment systems.
            </p>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Dr. Srinidhi believes that healthcare is fundamentally different from other domains of data science. Unlike retrospective data models, healthcare must move prospectively—recognizing that each patient represents a unique combination of genomics, EHR patterns, and biological pathways. Fine-tuning such systems demands not just algorithms, but deep medical expertise and contextual understanding.
            </p>
            <blockquote className="italic text-primary-600 font-medium text-lg mt-4 border-l-4 border-primary-500 pl-4">
              “Medicine of tomorrow isn’t about treating diseases — it’s about preventing them before they emerge.”
            </blockquote>
          </div>
        </div>

        {/* Shweta K.V */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-[36px] font-semibold text-[#24292E] mb-2">
              Shweta K.V — <span className="text-primary-500">Co-Founder & COO</span>
            </h2>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Shweta K.V is a strategic healthcare innovator who bridges biomedical science, operations, and AI transformation. As Co-Founder and COO of AIGNOZ, she leads the translation of advanced research into scalable, real-world health technologies.
            </p>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Her expertise lies in clinical informatics, digital health infrastructure, and precision data management, ensuring that complex AI models are integrated seamlessly into hospital and public health ecosystems. Shweta believes that the future of medicine depends on collaboration between clinicians, data scientists, and system designers, uniting innovation with empathy and patient safety.
            </p>
            <blockquote className="italic text-primary-600 font-medium text-lg mt-4 border-l-4 border-primary-500 pl-4">
              “The real power of AI in healthcare isn’t automation — it’s augmentation. It empowers humans to make smarter, faster, and more compassionate decisions.”
            </blockquote>
          </div>
          <div className="md:w-1/2">
            <img
              src={doc2}
              alt="Shweta K.V"
              className="w-[400px] rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Lalith Aravindan */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={doc3}
              alt="Lalith Aravindan"
              className="w-[400px] rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-[36px] font-semibold text-[#24292E] mb-2">
              Lalith Aravindan — <span className="text-primary-500">Chief Technology Officer (CTO)</span>
            </h2>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Lalith Aravindan is a forward-thinking technologist and data scientist specializing in machine learning, deep learning, and full-stack AI development. As the CTO at AIGNOZ, Lalith leads the architecture and deployment of scalable AI systems that power the company’s precision medicine ecosystem.
            </p>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              With a strong foundation in Python, TensorFlow, PyTorch, and advanced data analytics, Lalith brings expertise in building intelligent systems that bridge clinical data, genomics, and predictive modeling. His experience spans projects in computer vision, RAG-based chatbots, and generative AI applications, blending engineering precision with scientific creativity.
            </p>
            <p className="text-[#383F45] text-[16px] md:text-lg leading-relaxed mb-4">
              Before AIGNOZ, Lalith managed AI projects at KMC Tech Solutions, leading cross-functional teams to deliver enterprise-grade ML solutions. His hands-on experience in Flask, Django, React, and Node.js enables seamless integration of AI-driven insights into healthcare workflows.
            </p>
            <blockquote className="italic text-primary-600 font-medium text-lg mt-4 border-l-4 border-primary-500 pl-4">
              “The real innovation happens when data, biology, and empathy converge — that’s when AI becomes medicine.”
            </blockquote>
          </div>
        </div>
      </section>



      {/* Meet the Experts Section  */}
      <section className='section'>
        <div className='xl:w-[60%] text-center mx-auto mt-14'>
          <h1 className='font-[600] text-[36px]'>Meet the Experts</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Your health is in safe hands with our expert medical team.</p>
        </div>
        <Experts />
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
