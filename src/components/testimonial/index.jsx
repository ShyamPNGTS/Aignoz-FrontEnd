import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialImg from "../../assets/icons/testimonial-img.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";


const testimonials = [
  {
    name: "Meera Kapoor",
    image: testimonialImg,
    quote:
      "Their AI made it so easy to find the perfect doctor for me. The booking process was smooth, and Dr. Ayesha took the time to explain everything clearly. I felt completely supported and cared for.",
  },
  {
    name: "Rajiv Menon",
    image: testimonialImg,
    quote:
      "The AI-driven matching helped me find the right doctor effortlessly. Booking was seamless, and Dr. Ayesha explained everything in detail. I felt genuinely looked after and confident in my care.",
  },
  {
    name: "Tanisha Verma",
    image: testimonialImg,
    quote:
      "Finding the right doctor was effortless with this clinic. The booking process was simple, and Dr. Ayesha took the time to explain everything clearly. I felt truly cared for.",
  },
  {
    name: "Arjun Rathi",
    image: testimonialImg,
    quote:
      "Thanks to their smart AI, finding the right doctor was simple and stress-free. Booking was easy, and Dr. Ayesha’s clear explanations made me feel truly cared for.",
  },
  {
    name: "Sanya Bhatia",
    image: testimonialImg,
    quote:
      "Their AI made finding a doctor so simple! Booking was a breeze, and Dr. Ayesha explained everything clearly. I felt completely cared for.",
  },
];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-12 cursor-pointer left-1/2 translate-x-6 z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-primary-500 text-2xl" />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-12 cursor-pointer left-1/2 -translate-x-10 z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-primary-500 text-2xl" />
    </button>
  );
};

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(2); // center

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    initialSlide: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <div className="w-full py-16 mb-8 relative">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-2 mb-6">
            <div
              className={`relative rounded-xl p-6 pt-16 bg-white shadow-md transition-all duration-300 ${
                index === activeIndex ? "scale-100 shadow-lg" : "scale-95 opacity-60"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-18 rounded-full z-100 absolute top-0 left-[30px] transform border-4 border-white shadow"
              />
              <p className="text-[#383F45] text-[14px] my-6">{item.quote}</p>
              <h3 className="text-[#383F45] font-[700] text-[14px]">{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
