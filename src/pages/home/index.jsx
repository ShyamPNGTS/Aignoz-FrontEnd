import React, { useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images here
import heroImg from '../../assets/images/home-hero-doctor.png'
import bgdoctor from '../../assets/images/home-hero-Ellipse.png'
import patientTrust from '../../assets/images/home-patient-trust.png'
import doctor1 from '../../assets/images/home-doctor-1.png'
import doctor2 from '../../assets/images/home-doctor-2.png'
import doctor3 from '../../assets/images/home-doctor-3.png'
import img1 from '../../assets/images/home-img.png'
import img4 from "../../assets/images/productHigh.jpg";

//Import Icons here
import icon1 from '../../assets/icons/home-icon-1.png'
import icon2 from '../../assets/icons/home-icon-2.png'
import icon3 from '../../assets/icons/home-icon-3.png'
import icon4 from '../../assets/icons/home-icon-4.png'
import icon5 from '../../assets/icons/home-icon-5.png'
import icon6 from '../../assets/icons/home-icon-6.png'
import icon7 from '../../assets/icons/home-icon-7.png'
import icon8 from '../../assets/icons/home-icon-8.png'
import icon9 from '../../assets/icons/home-icon-9.png'
import icon10 from '../../assets/icons/home-icon-10.png'
import doc1 from "../../assets/images/doc-1.jpg"
import doc2 from "../../assets/images/doc-2.jpg"
import doc3 from "../../assets/images/doc-3.jpg"
import doc4 from "../../assets/images/doc-4.jpg"
import doc5 from "../../assets/images/doc-5.jpg"
import cardImg from "../../assets/images/about-experts-img.png"

import { FaStar } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineCheckCircle } from "react-icons/hi";
import Testimonial from '../../components/testimonial'
import HealthInsights from '../../components/health-insights'
import { useNavigate } from 'react-router-dom'

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

const pricingDoctor = [
  {
    title: "Free",
    price: "₹0",
    features: ["AI summary", "Plan generator"],
    highlight: true,
  },
  {
    title: "Pro Doctor",
    price: "₹799",
    features: ["Video explainers", "PDF exports"],
    highlight: true,
  },
  {
    title: "Genomic+",
    price: "₹1,499",
    features: ["Gene alerts", "Drug risks", "Genetic OCR"],
    highlight: true,
  },
  {
    title: "Clinic Suite",
    price: "₹3,999",
    features: ["Team view", "EHR", "IoT", "Export", "Integrations"],
    highlight: true,
  },
]

const pricingPatient = [
  {
    "title": "Lite",
    "price": "₹0",
    "features": ["AI messages", "Habit logs"],
    "highlight": true
  },
  {
    "title": "Prime",
    "price": "₹299",
    "features": ["Video messages"],
    "highlight": true
  },
  {
    "title": "Family+",
    "price": "₹799",
    "features": ["Up to 5 members", "AI health plan"],
    "highlight": true
  },
  {
    "title": "IoT Club",
    "price": "₹1,499",
    "features": ["IoT device", "Remote monitoring"],
    "highlight": true
  }
]

const testimonialsDoctor = [
  {
    quote: "“My AI assistant just saved me 30 minutes per patient.”",
    author: "– Dr. Radhika, Fetal Medicine Specialist",
  },
  {
    quote: "“Patients now thank me for issuing AI streak badges.”",
    author: "– Dr. Saif, Lifestyle Clinic Director",
  },
  {
    quote: "“I can’t imagine managing chronic care without it.”",
    author: "– Dr. Meera, Diabetologist",
  },
  {
    quote: "“Patients love their personalized AI health plans.”",
    author: "– Dr. Arjun, Cardiologist",
  },
  {
    quote: "“Saves staff time, improves care, and it’s easy to use.”",
    author: "– Dr. Kavya, Preventive Clinic Head",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



const Home = () => {

  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  const cards = [
    {
      id: 1,
      image: icon1,
      title: "General Consultation",
      text: "Routine checkups, medical advice, and ongoing care for all age groups.",
    },
    {
      id: 2,
      image: icon2,
      title: "Pediatric Care",
      text: "Specialized healthcare for infants, children, and teenagers.",
    },
    {
      id: 3,
      image: icon3,
      title: "AI Chatbot Diagnosis",
      text: "Aignoz’s chatbot consultations with symptom analysis.",
    },
    {
      id: 4,
      image: icon4,
      title: "Preventive Health Checkups",
      text: "Comprehensive screenings for early detection and disease prevention.",
    },
    {
      id: 5,
      image: icon5,
      title: "Disease Management",
      text: "Personalized care for diabetes, hypertension, and asthma.",
    },
    {
      id: 6,
      image: icon6,
      title: "Vaccinations",
      text: "Timely vaccines for children and adults to stay protected.",
    },
  ];
  const doctors = [
    {
        id: 1,
        name: "Dr. Srinidhi B V",
        specialization: "Cardiologist",
        description:
          "Dr. Sharma specializes in heart health, with expertise in managing hypertension, arrhythmias, and preventive cardiac care.",
        image: doc1,
        rating : 4.5
      },
      {
        id: 2,
        name: "Dr. Aruna Verma",
        specialization: "Dermatologist",
        description:
          "Dr. Verma provides advanced treatments for skin, hair, and nail disorders, including acne, eczema, and cosmetic dermatology.",
        image: doc2,
        rating : 4.2
      },
      {
        id: 3,
        name: "Dr. Kavit Menon",
        specialization: "Pediatrician",
        description:
          "With over 12 years of experience, Dr. Menon is dedicated to children’s health, covering growth, vaccinations, and nutrition.",
        image: cardImg,
        rating : 4.0
      },
      {
        id: 4,
        name: "Dr. Rakesh Gupta",
        specialization: "Orthopedic Surgeon",
        description:
          "Dr. Gupta is an expert in treating bone, joint, and spine conditions, specializing in sports injuries and joint replacements.",
        image: doc3,
        rating : 3.8
      },
      {
        id: 5,
        name: "Dr. Neha Kapoor",
        specialization: "Gynecologist",
        description:
          "Dr. Kapoor focuses on women’s health, offering care in pregnancy, fertility, menstrual health, and preventive screenings.",
        image: doc4,
        rating : 4.3
      },
      {
        id: 6,
        name: "Dr. Sanjay Rao",
        specialization: "Neurologist",
        description:
          "Dr. Rao is experienced in diagnosing and managing neurological disorders such as epilepsy, stroke, migraines, and dementia.",
        image: doc5,
        rating : 4.9
      },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1); // small screens
      } else if (width < 1024) {
        setVisibleCards(2); // medium screens
      } else {
        setVisibleCards(3); // large screens
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCards < doctors.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/appointment");
    } else {
      navigate("/login");
    }
  };

  const doctorRefs = useRef(doctors.map(() => React.createRef()));


  return (
    <>
      {/* Hero Section  */}
    <div className="relative bg-[#BE34EA1A] overflow-hidden">
  <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-4 px-6 relative z-10">
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 my-10  text-center md:text-left">
      <h1 className="text-3xl md:text-[50px] font-semibold text-gray-800 mb-2 leading-snug">
        Your AI-Powered Clinical Copilot Is Here
      </h1>

      <h2 className="text-3xl md:text-[50px] font-semibold text-primary-500 mb-1 leading-snug">
        Smarter. Faster. Personal.
      </h2>

      <svg
        className="w-1/2 h-3 mb-6 z-0 mx-auto md:mx-0"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q50,-10 100,10"
          stroke="#BE34EA"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <p className="text-base text-[#383F45] mb-6 max-w-xl mx-auto md:mx-0">
        Dr. GPD helps doctors analyze symptoms, lab reports, ultrasound and
        genetic data in seconds — then turns insights into action for
        patients, complete with streak-based motivation and smart rewards.
      </p>

      <button
        onClick={handleClick}
        className="bg-primary-500 text-white mb-[33px] md:mb-0 px-6 py-3 rounded-full hover:bg-primary-700 transition"
      >
        Start Free Trial
      </button>
    </div>
  </section>

  {/* Right Side - Image (full bleed to right edge) */}
  <div className="absolute  hidden md:block my-10  -bottom-10 right-0 w-1/2">
    <img
      src={bgdoctor}
      alt=""
      className="absolute bottom-0 right-0 h-[60%] w-[160%] opacity-40 -z-10"
    />
    <img
      src={heroImg}
      alt="Spiritual healing"
      className="w-full h-auto relative z-30"
    />
  </div>

  {/* Stats Bar */}
  <div className="relative z-20 w-full py-6 flex flex-col md:flex-row gap-6 md:gap-0 justify-around text-white bg-[#BE34EAE5]">
    <div className="flex items-center flex-col">
      <h1 className="text-[40px] font-semibold">24/7</h1>
      <p className="text-base">Online Support</p>
    </div>
    <div className="flex items-center flex-col">
      <h1 className="text-[40px] font-semibold">100+</h1>
      <p className="text-base">Doctors</p>
    </div>
    <div className="flex items-center flex-col">
      <h1 className="text-[40px] font-semibold">1M+</h1>
      <p className="text-base">Active Patients</p>
    </div>
  </div>
</div>



      {/* Cards Section  */}
      <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/home-effect-1.png')] bg-left-bottom">
        <section className='section'>
          <div className='xl:w-[60%] text-center mx-auto mt-14'>
            <h1 className='font-[500] text-[36px]'>Quality Healthcare Services We Provide</h1>
            <p className='text-[18px] mt-2 text-[#383F45] '>We offer a wide range of medical services to meet your health needs with care, precision, and compassion.</p>
          </div>
          <div className="px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl border-1 border-primary-200 overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img src={card.image} alt={card.title} className="px-6 pt-4" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[22px] text-[#1A1D1F] mb-2">{card.title}</h3>
                    <p className="text-[18px] text-[#454C52] ">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Patients Trust Us Section  */}
      <section className='section mt-10'>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Side */}
          <div className="md:w-[100%] space-y-6">
            <h2 className="text-[36px] font-bold text-gray-800">Why Patients Trust Us</h2>
            <p className="text-[#383F45] text-[18px]">
              {/* Choosing the right healthcare provider is important, and we’re here to make that decision easy. At our clinic, we combine medical excellence with compassionate care, giving every patient the attention they deserve. Here's why so many trust us with their health: */}
              Choosing the right healthcare partner is crucial. Our advanced AI technology works hand in hand with expert doctors to deliver personalized, compassionate care you can trust.
            </p>
            <button className="bg-primary-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
              Read more
            </button>
            <img
              src={patientTrust}
              alt="Healing illustration"
              className="w-130 rounded-3xl object-contain mt-6"
            />
          </div>

          {/* Right Side - Plus Symbol Layout */}
          <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/home-effect-2.png')] bg-center">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-0 ">
              {/* Box 1 */}
              {/* <div className="bg-white mt-14 h-max border-r-2 border-b-2 border-primary-500 py-10 p-5">
              <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                Chronic Disease Management
              </h2>
              <p className="text-[18px] text-[#454C52] ">
                Personalized care plans for conditions like diabetes, hypertension, and asthma.
              </p>
            </div> */}
              <div className="mt-14 h-max relative border-r-2 border-primary-500 py-10 p-5">
                {/* Bottom border as a separate div */}
                <div className="absolute bottom-0 left-3 h-[2px] bg-primary-500 w-[90%]"></div>

                <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                  Chronic Disease Management
                </h2>
                <p className="text-[18px] text-[#454C52]">
                  Personalized care plans for conditions like diabetes, hypertension, and asthma.
                </p>
              </div>


              {/* Box 2 */}
              <div className="h-max relative p-5 mt-[40px] border-primary-500">
                {/* Bottom border as a custom div */}
                <div className="absolute bottom-0 right-3 h-[2px] bg-primary-500 w-[90%]"></div>

                <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                  Preventive Screenings
                </h2>
                <p className="text-[18px] text-[#454C52]">
                  Timely check-ups to detect issues before they become serious health concerns.
                </p>
              </div>


              {/* Box 3 */}
              <div className="h-max border-r-2 border-primary-500  p-5 ">
                <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                  Mental Wellness Programs
                </h2>
                <p className="text-[18px] text-[#454C52] ">
                  Support for stress, anxiety, and overall mental well-being through holistic care.
                </p>
              </div>

              {/* Box 4 */}
              <div className="h-max mt-[-70px] p-5">
                <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                  AI Chatbot Diagnosis
                </h2>
                <p className="text-[18px] text-[#454C52] ">
                  Aignoz’s chatbot collects symptoms and creates a report for faster doctor care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Who's it for?  */}
      <section className="section mt-10 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Who's It For?</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Built for Doctors, Loved by Patients
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "OB/GYNs & Fetal Medicine Specialists",
            "Cardiologists, Diabetologists, Psychiatrists",
            "Wellness & Preventive Clinics",
            "Hospitals & Chain Clinics",
            "Individuals & Families managing chronic/genetic risk",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 mb-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-semibold">
                {idx + 1}
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights  */}
      <section className='section-about bg-gradient-to-r mt-10 from-transparent to-primary-50 flex flex-col-reverse md:flex-row items-center gap-8'>

        {/* Left Side - Text */}
        <div className="md:w-1/2">

          <h2 className="text-[40px]/20 font-[500] text-[#24292E] my-4">
            <span className='font-[600]'>Product Highlights</span>
          </h2>
          <p className="text-[#383F45] text-[16px] md:text-lg">
            What You Can Do with Dr. GPD
          </p>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Analyze consults, labs, and genetic reports</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Detect gene-drug interactions (pharmacogenomics)</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Encourage patients for habit tracking & preventive action</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Generate AI-powered health plans weekly</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Recommend IoT devices based on diagnosis</p>
          </div>
          <div className='flex items-center mt-6 md:w-[100%] gap-2'>
            <HiOutlineCheckCircle className="text-primary-500 font-semibold text-2xl" />
            <p>Deliver personalized videos using digital doctor clones</p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Descriptive Alt"
            className="w-[550px] rounded-2xl"
          />
        </div>

      </section>

      {/* Pricing Section  */}
      <section className="section mt-16 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Pricing Section
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Flexible Plans for Doctors & Patients
        </p>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Pricing Plan for Doctors :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              pricingDoctor.map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between h-full rounded-2xl border ${plan.highlight ? "border-primary-600 shadow-lg" : "border-gray-200"
                    } p-6 transition hover:shadow-xl bg-white`}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {plan.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600 mb-4">{plan.price}</p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-black">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* <button
      className={`w-full mt-auto py-2 rounded-lg font-medium ${
        plan.highlight
          ? "bg-primary-600 text-white hover:bg-primary-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {plan.price === "₹0" ? "Start Free" : "Choose Plan"}
    </button> */}
                </div>
              ))}

          </div>
        </div>

        <div>
          <h2 className="text-xl mt-14 font-bold mb-4 text-gray-800">
            Pricing Plan for Patients :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              pricingPatient.map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between h-full rounded-2xl border ${plan.highlight ? "border-primary-600 shadow-lg" : "border-gray-200"
                    } p-6 transition hover:shadow-xl bg-white`}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {plan.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600 mb-4">{plan.price}</p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-black">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <button
      className={`w-full mt-auto py-2 rounded-lg font-medium ${
        plan.highlight
          ? "bg-primary-600 text-white hover:bg-primary-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {plan.price === "₹0" ? "Start Free" : "Choose Plan"}
    </button> */}
                </div>
              ))}

          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section  */}
      <section className='section mt-2'>
        <div className='xl:w-[60%] text-center mx-auto mt-14'>
          <h1 className='font-[600] text-[36px]'>Meet Our Doctors</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Our dedicated team of specialists is committed to your well-being.</p>
        </div>

        <div className="relative mt-8 flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30 cursor-pointer bg-white shadow p-1 md:p-2 rounded-full mr-0 md:mr-4"
          >
            <HiArrowNarrowLeft className="text-lg md:text-2xl text-primary-500" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {doctors.slice(startIndex, startIndex + visibleCards).map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-4 rounded-md shadow-lg drop-shadow-[0_4px_8px_rgba(221, 124, 254, 0.4)]"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="mx-auto h-80 rounded-md mb-4"
                />
                <div className='flex justify-between'>
                  <h3 className="text-[18px] font-[500] text-[#24292E]">{doc.name}</h3>
                  <div className="flex bg-[#FFCC001F] rounded-full px-2 py-1 items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm text-gray-700">{doc.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-primary-600 font-medium mb-2">
                  {doc.specialization}
                </p>
                <hr className='text-[#E5E7EA] p-1 my-3' />
                <p className="text-[14px] text-[#454C52]">{doc.description}</p>
              </div>
            ))}
          </div>


          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCards >= doctors.length}
            className="disabled:opacity-30 cursor-pointer bg-white shadow p-1 md:p-2 rounded-full ml-0 md:ml-4"
          >
            <HiArrowNarrowRight className="text-lg md:text-2xl text-primary-500" />
          </button>
        </div>
      </section>

      <section className="section mt-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Doctor Testimonials
        </h2>

        <Slider {...sliderSettings}>
          {testimonialsDoctor.map((item, idx) => (
            <div key={idx} className="px-4 mb-8">
              <div className="bg-white border-b-1 border-r-1 border-gray-200 shadow-md p-6 rounded-2xl h-full">
                <p className="text-lg text-gray-700 italic mb-4">{item.quote}</p>
                <p className="text-sm text-gray-500 font-medium">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* Client Testimonial Section  */}
      <section className='section bg-[#F9FCF8] mt-8'>
        <div className="xl:w-[30%] md:w-[40%] h-30 bg-center w-[80%] bg-no-repeat bg-[url('/src/assets/icons/home-client-quote-bg.png')] text-center mx-auto mt-14">
          <h1 className='font-[600] text-[#24292E] text-[30px]'>What our client say about us.</h1>
        </div>
        <Testimonial />
      </section>

      {/* left-img & right-text Section  */}
      <div className="bg-contain bg-bottom pb-6 mb-8 bg-no-repeat bg-[url('/src/assets/images/home-section-bg.png')]">
        <section className='section mt-14 flex flex-col md:flex-row items-center gap-8'>

          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Descriptive Alt"
              className="w-[450px] rounded-3xl"
            />
          </div>

          {/* Right Side - Text */}
          <div className="md:w-1/2">
            <hr className='w-50 text-primary-500 border-2 ' />
            <h2 className="text-[32px] md:text-3xl font-[600] text-[#24292E] my-4">
              Unlock the Future of Healthcare with Our Platform
            </h2>
            <p className="text-[#383F45] text-[16px] md:text-lg">
              Discover the powerful tools and benefits that make our healthcare network the top choice for medical professionals.
            </p>
            <div className='flex items-center mt-8 md:w-[60%] gap-4'>
              <img src={icon7} alt="" />
              <p> <span className='font-semibold'>Broad Patient Network:</span> Reach more patients and grow your practice.</p>
            </div>
            <div className='flex items-center mt-8 md:w-[60%] gap-4'>
              <img src={icon8} alt="" />
              <p> <span className='font-semibold'>Telemedicine:</span> Offer consultations anytime, anywhere.</p>
            </div>
            <div className='flex items-center mt-8 md:w-[60%] gap-4'>
              <img src={icon9} alt="" />
              <p> <span className='font-semibold'>Showcase Your Expertise:</span> Highlight your qualifications and specialties.</p>
            </div>
            <div className='flex items-center mt-8 md:w-[60%] gap-4'>
              <img src={icon10} alt="" />
              <p> <span className='font-semibold'>Appointment Management:</span> Simplify scheduling with our intuitive system.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Health Insights Section  */}
      <section className='section'>
        <div className='xl:w-[60%] text-center mx-auto mt-6'>
          <h1 className='font-[600] text-[36px]'>Explore Our Health Insights</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Get expert advice, tips, and the latest health trends to empower your well-being.</p>
        </div>
        <HealthInsights limit={3} />
      </section>

      <section className="section mt-20 text-center px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Join the Future of Medicine
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Get started today with AI-powered health tools.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <a
            href="#"
            className="bg-primary-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
          >
            Doctors
          </a>
          <a
            href="#"
            className="bg-primary-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
          >
            Clinics
          </a>
          <a
            href="#"
            className="bg-primary-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
          >
            Patients
          </a>
        </div>
      </section>


      {/* Newsletter Section  */}
      {/* <div className="bg-[url('/src/assets/images/home-newsletter-bg.png')]  bg-no-repeat bg-bottom-right bg-contain">
  <section className="my-10 px-4 sm:px-6 lg:px-0">
    <div className="max-w-4xl mx-auto shadow-md shadow-primary-200 rounded-[30px] py-12 sm:py-16 px-4 sm:px-10 md:px-20 text-center bg-white">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000] mb-4">
        Stay connected with Us
      </h2>
      <p className="text-[#2E3438] text-sm sm:text-base mb-6">
        Join our newsletter for health tips, wellness advice, and expert medical insights—delivered straight to your inbox.
      </p>

      <div className="relative w-full max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full py-3 px-4 pr-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-primary-500 text-white px-5 py-2 rounded-full hover:bg-primary-600 transition">
          Submit
        </button>
      </div>
    </div>
  </section>
</div> */}

    </>
  )
}

export default Home;
