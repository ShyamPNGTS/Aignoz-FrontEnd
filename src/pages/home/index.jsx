import React, { useEffect, useState } from 'react'

// Import Images here
import heroImg from '../../assets/images/home-hero-doctor.png'
import bgdoctor from '../../assets/images/home-hero-Ellipse.png'
import patientTrust from '../../assets/images/home-patient-trust.png'
import doctor1 from '../../assets/images/home-doctor-1.png'
import doctor2 from '../../assets/images/home-doctor-2.png'
import doctor3 from '../../assets/images/home-doctor-3.png'
import img1 from '../../assets/images/home-img.png'

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
import { FaStar } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Testimonial from '../../components/testimonial'
import HealthInsights from '../../components/health-insights'
import { useNavigate } from 'react-router-dom'


const Home = () => {
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
      title: "Diagnostics & Lab Tests",
      text: "Advanced testing services with accurate and timely results.",
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
      title: "Chronic Disease Management",
      text: "Personalized care plans for conditions like diabetes, hypertension, and asthma.",
    },
    {
      id: 6,
      image: icon6,
      title: "Vaccinations & Immunizations",
      text: "Safe and timely vaccines for children and adults to stay protected.",
    },
  ];
  const doctors = [
    {
      id: 1,
      name: "Dr. Alice Smith",
      specialization: "Cardiologist",
      description: "Specialized in medical imaging and analysis, ensuring accurate and timely diagnostic support for every patient.",
      image: doctor1,
      rating : 4.5,
    },
    {
      id: 2,
      name: "Dr. Ravi Patel",
      specialization: "Endocrinologist",
      description: "Specialized in medical imaging and analysis, ensuring accurate and timely diagnostic support for every patient.",
      image: doctor2,
      rating : 4.2,
    },
    {
      id: 3,
      name: "Dr. Fatima Khan",
      specialization: "Dermatologist",
      description: "Specialized in medical imaging and analysis, ensuring accurate and timely diagnostic support for every patient.",
      image: doctor3,
      rating : 4.4,
    },
    {
      id: 4,
      name: "Dr. Daniel Kim",
      specialization: "Neurologist",
      description: "Specialized in medical imaging and analysis, ensuring accurate and timely diagnostic support for every patient.",
      image: doctor1,
      rating : 4.8,
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


  return (
    <>
      {/* Hero Section  */}
      <div>
        <section className="bg-[#BE34EA1A] px-6">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left Side - Text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-[64px] font-semibold text-gray-800 mb-2">
                Your Health is Our
              </h1>
              <h1 className="text-4xl md:text-[64px] font-semibold text-primary-500 mb-1">
                First Priority
              </h1>
              <svg
                className="w-[50%] h-3 mb-6 z-0"
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
              <p className="text-[16px] font-[400] text-[#383F45] mb-6">
                Experience expert care from trusted medical professionals. Book appointments anytime, anywhere.
              </p>
              <button onClick={handleClick} className="bg-primary-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-700 transition">
                Book Appointment
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="relative md:w-1/2">
              {/* Background Decorative Image */}
              <img
                src={bgdoctor}
                alt=""
                className="absolute bottom-0 h-[60%]  w-[160%] hidden md:block opacity-400 -z-10"
              />
              <img
                src={heroImg}
                alt="Spiritual healing"
                className="w-full max-w-md relative z-10 mx-auto"
              />
            </div>
          </div>

        </section>
        <div className='w-[100%] py-4 flex-col md:flex-row gap-8 md:gap-0 justify-around text-white flex bg-[#BE34EAE5]'>
          <div className='flex items-center flex-col'>
            <h1 className='text-[48px] font-[600] '>24/7</h1>
            <p className='text-[16px] '>Online Support</p>
          </div>
          <div className='flex items-center flex-col'>
            <h1 className='text-[48px] font-[600] '>100+</h1>
            <p className='text-[16px] '>Doctors</p>
          </div>
          <div className='flex items-center flex-col'>
            <h1 className='text-[48px] font-[600] '>1M+</h1>
            <p className='text-[16px] '>Active Patients</p>
          </div>
        </div>
      </div>

      {/* Cards Section  */}
      <section className='section'>
        <div className='xl:w-[60%] text-center mx-auto mt-14'>
          <h1 className='font-[500] text-[36px]'>Quality Healthcare Services We Provide</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>We offer a wide range of medical services to meet your health needs with care, precision, and compassion.</p>
        </div>
        <div className="px-6 py-12 bg-no-repeat bg-cover bg-[url('/src/assets/images/home-effect-1.png')] bg-left-bottom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl border-1 border-primary-200 overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img src={card.image} alt={card.title} className="px-6 pt-4" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[22px] text-[#1A1D1F] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-[18px] text-[#454C52] ">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us Section  */}
      <section className='section mt-10'>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Side */}
          <div className="md:w-[100%] space-y-6">
            <h2 className="text-[36px] font-bold text-gray-800">Why Patients Trust Us</h2>
            <p className="text-[#383F45] text-[18px]">
              Choosing the right healthcare provider is important, and we’re here to make that decision easy. At our clinic, we combine medical excellence with compassionate care, giving every patient the attention they deserve. Here's why so many trust us with their health:
            </p>
            <button className="bg-primary-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
              Read more
            </button>
            <img
              src={patientTrust}
              alt="Healing illustration"
              className="w-130 object-contain mt-6"
            />
          </div>

          {/* Right Side - Plus Symbol Layout */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-0 ">
            {/* Box 1 */}
            <div className="bg-white mt-14 h-max border-r-2 border-b-2 border-primary-500 py-10  p-5">
              <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                Chronic Disease Management
              </h2>
              <p className="text-[18px] text-[#454C52] ">
                Personalized care plans for conditions like diabetes, hypertension, and asthma.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white h-max p-5 mt-[40px]  border-b-2 border-primary-500">
              <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                Preventive Screenings
              </h2>
              <p className="text-[18px] text-[#454C52] ">
                Timely check-ups to detect issues before they become serious health concerns.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white h-max border-r-2 border-primary-500  p-5 ">
              <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                Mental Wellness Programs
              </h2>
              <p className="text-[18px] text-[#454C52] ">
                Support for stress, anxiety, and overall mental well-being through holistic care.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white h-max mt-[-70px] p-5">
              <h2 className="text-[#1A1D1F] text-[22px] font-semibold mb-2">
                Nutritional Counseling
              </h2>
              <p className="text-[18px] text-[#454C52] ">
                Customized dietary plans to boost energy, immunity, and long-term wellness.
              </p>
            </div>
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
            className="disabled:opacity-30 cursor-pointer bg-white shadow p-2 rounded-full mr-4"
          >
             <HiArrowNarrowLeft className="text-2xl text-primary-500" />
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
                  className="w-full object-cover rounded-md mb-4"
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
            className="disabled:opacity-30 cursor-pointer bg-white shadow p-2 rounded-full ml-4"
          >
            <HiArrowNarrowRight className="text-2xl text-primary-500" />
          </button>
        </div>
      </section>

      {/* Client Testimonial Section  */}
      <section className='section bg-[#F9FCF8] mt-8'>
      <div className="xl:w-[30%] md:w-[40%] h-30 bg-center w-[80%] bg-no-repeat bg-[url('/src/assets/icons/home-client-quote-bg.png')] text-center mx-auto mt-14">
          <h1 className='font-[600] text-[#24292E] text-[30px]'>What our client say about us.</h1>
        </div>
       <Testimonial/>
      </section>

       {/* left-img & right-text Section  */}
      <div className="bg-contain bg-bottom pb-6 mb-8 bg-no-repeat bg-[url('/src/assets/images/home-section-bg.png')]">
      <section className='section mt-14 flex flex-col md:flex-row items-center gap-8'>
      
      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img
          src={img1}
          alt="Descriptive Alt"
          className="w-[550px] rounded-md"
        />
      </div>
    
      {/* Right Side - Text */}
      <div className="md:w-1/2">
      <hr className='w-50 text-primary-500 border-2 '/>
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
        <HealthInsights limit={3}/>
      </section>

      {/* Newsletter Section  */}
      {/* <div className="bg-[url('/src/assets/images/home-newsletter-bg.png')] bg-size-[auto_600px] bg-no-repeat bg-bottom-right bg-contain">
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
