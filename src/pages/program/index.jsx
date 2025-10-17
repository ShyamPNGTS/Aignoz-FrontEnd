
import React, { useState } from "react";
import heroImg from "../../assets/images/home-hero-doctor.png";
import bgdoctor from "../../assets/images/home-hero-Ellipse.png";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

import patientTrust from '../../assets/images/home-patient-trust.png'
import img3 from "../../assets/images/about-section-3.png";
import doc1 from "../../assets/images/doc-1.jpg"
import founder2 from "../../assets/images/doc-2.jpg"
import founder3 from "../../assets/images/doc-3.jpg"

const faqs = [
  {
    question: "Do I need coding experience?",
    answer: (
      <>
        <strong>Doctors:</strong> No.{" "}
        <strong>Engineers:</strong> Basic programming is helpful but not required — focus
        is on application and design.
      </>
    ),
  },
  {
    question: "What if I don’t have genomics/imaging data?",
    answer:
      "We provide demo datasets; you can also use what’s available locally.",
  },
  {
    question: "How is this different from other AI courses?",
    answer:
      "Because of our dual-track approach, hands-on clinical focus, and inclusion of ethics and regulation modules.",
  },
  {
    question: "Certificate recognized by whom?",
    answer:
      "Our certificate is issued by AIGNOZ, with planned affiliation or co-issuance with medical colleges.",
  },
];

const Program = () => {
  const navigate = useNavigate();

  // ✅ Add state for FAQ accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleApplyClick = () => {
    navigate("/");
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#BE34EA1A] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
            AI Healthcare Academy
          </h1>

          <h2 className="text-2xl md:text-3xl text-primary-500 font-medium mb-6">
            Empowering Doctors & Engineers to Co-create Next-Gen Clinical AI Solutions
          </h2>

          <button
            onClick={handleApplyClick}
            className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition"
          >
            Apply for Next Cohort
          </button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white relative">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Side: Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Program Overview
      </h2>

      <p className="text-lg text-[#383F45] leading-relaxed">
        At AIGNOZ, we believe that meaningful healthcare innovation happens when
        clinicians and technologists learn together. Our AI & Blockchain Healthcare
        Academy is a 2-month cohort-based program that equips doctors with literacy
        in AI and blockchain, and engineers with the medical domain knowledge to
        build solutions that truly make an impact.
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img
        src={patientTrust} // replace with your image path
        alt="Program Overview"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Who It's For Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
            Who It’s For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Doctors */}
            <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-500 mb-4">
                Doctors who want to:
              </h3>
              <ul className="list-disc list-inside text-lg text-[#383F45] space-y-3">
                <li>
                  Understand how AI & blockchain can enhance diagnosis, prognosis, and
                  treatment planning.
                </li>
                <li>
                  Use AI tools in clinical practice safely, ethically, and with
                  confidence.
                </li>
                <li>
                  Collaborate with tech teams to co-create patient-centered, trustworthy
                  solutions.
                </li>
              </ul>
            </div>

            {/* Engineers */}
            <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-500 mb-4">
                Engineers who want to:
              </h3>
              <ul className="list-disc list-inside text-lg text-[#383F45] space-y-3">
                <li>
                  Learn the fundamentals of disease, medical data, and clinical
                  workflows.
                </li>
                <li>
                  Build AI models with real healthcare data (labs, imaging, genomics).
                </li>
                <li>
                  Work closely with doctors to ensure ethics, explainability, and impact.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks & Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
            Program Tracks & Modules
          </h2>

          <p className="text-lg text-[#383F45] mb-10 max-w-3xl mx-auto">
            We offer two parallel tracks, one for Doctors and another for Engineers. Each
            track has 6 modules and a Capstone project.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden text-left">
              <thead className="bg-[#BE34EA1A]">
                <tr>
                  <th className="px-6 py-4 text-lg font-semibold text-gray-800 w-1/2">
                    Doctors Track
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-gray-800 w-1/2">
                    Engineers Track
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#383F45] text-base">
                <tr className="border-t">
                  <td className="px-6 py-4">1. AI & Data Literacy</td>
                  <td className="px-6 py-4">1. Healthcare Foundations</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">2. Blockchain in Healthcare</td>
                  <td className="px-6 py-4">2. Health Data Ecosystem</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">3. AI in Disease Journey</td>
                  <td className="px-6 py-4">3. AI for Disease Modeling</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">4. Human-AI Collaboration</td>
                  <td className="px-6 py-4">4. Patient-Centric Design</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    5. Personalized Treatment & Genomics
                  </td>
                  <td className="px-6 py-4">5. Treatment Journey Mapping</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">6. Ethics, Law & Adoption</td>
                  <td className="px-6 py-4">6. Deployment & Ethics</td>
                </tr>
                <tr className="border-t bg-[#BE34EA1A] font-medium">
                  <td className="px-6 py-4">
                    Capstone: Doctor–Engineer Co-Design Lab
                  </td>
                  <td className="px-6 py-4">
                    Capstone: Engineer–Doctor Co-Creation Lab
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
{/* How You’ll Learn */}
<section className="py-20 ">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Side: Image */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <img
        src={img3} // replace with your actual image path
        alt="How You'll Learn"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>

    {/* Right Side: Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        How You’ll Learn
      </h2>

      <ul className="text-lg text-[#383F45] space-y-4 list-disc list-inside">
        <li>Pre-recorded AI clone video lectures + interactive slide decks</li>
        <li>Hands-on labs using real datasets (EHR, imaging, genomics)</li>
        <li>Weekly live sessions and case discussions with tutors & mentors</li>
        <li>
          Cross-disciplinary team projects that bring doctors & engineers together
        </li>
        <li>Certification awarded on successful completion</li>
      </ul>
    </div>

  </div>
</section>


{/* Outcomes & What You’ll Gain */}
<section className="py-20 bg-[#F9F9F9]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-10">
      Outcomes & What You’ll Gain
    </h2>
    <p className="text-lg text-[#383F45] text-center mb-12 max-w-3xl mx-auto">
      By graduation, participants will be able to:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Doctors Outcome */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <span className="bg-primary-500 text-white rounded-full px-3 p-1.5 mr-3">
            ✔
          </span>
          <h3 className="text-xl font-semibold text-gray-800">Doctors</h3>
        </div>
        <p className="text-[#383F45] text-base leading-relaxed">
          Evaluate, interpret, and adopt AI tools safely in your practice
        </p>
      </div>

      {/* Engineers Outcome */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <span className="bg-primary-500 text-white rounded-full px-3 p-1.5 mr-3">
            ✔
          </span>
          <h3 className="text-xl font-semibold text-gray-800">Engineers</h3>
        </div>
        <p className="text-[#383F45] text-base leading-relaxed">
          Build AI models that respect clinical realities and data privacy
        </p>
      </div>

      {/* Together Outcome */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <span className="bg-primary-500 text-white rounded-full px-3 p-1.5 mr-3">
            ✔
          </span>
          <h3 className="text-xl font-semibold text-gray-800">Together</h3>
        </div>
        <p className="text-[#383F45] text-base leading-relaxed">
          Launch AI/Blockchain-based pilot solutions under the AIGNOZ Academy brand
        </p>
      </div>
    </div>
  </div>
</section>



{/* Mentors & Faculty Section */}
{/* <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
      Mentors & Faculty
    </h2>
    <p className="text-lg text-[#383F45] mb-10 max-w-3xl mx-auto">
      Learn from a multidisciplinary team of doctors, AI scientists, and innovators who
      bridge healthcare and technology.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
     
      <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md">
        <img
          src="/images/mentor1.jpg"
          alt="Dr. X"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Dr. X</h3>
        <p className="text-primary-500 text-sm mb-2">
          Radiologist, Apollo Hospitals
        </p>
        <p className="text-sm text-[#383F45]">
          Experienced clinician integrating AI for diagnostic imaging and workflow
          optimization.
        </p>
      </div>

      <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md">
        <img
          src="/images/mentor2.jpg"
          alt="Prof. Y"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Prof. Y</h3>
        <p className="text-primary-500 text-sm mb-2">
          AI Scientist, IIT Hyderabad
        </p>
        <p className="text-sm text-[#383F45]">
          Specializes in deep learning for medical data and model interpretability.
        </p>
      </div>

      <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md">
        <img
          src="/images/mentor3.jpg"
          alt="Dr. Z"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Dr. Z</h3>
        <p className="text-primary-500 text-sm mb-2">
          Biomedical Engineer, AIGNOZ
        </p>
        <p className="text-sm text-[#383F45]">
          Works on AI-blockchain integration for secure clinical data sharing.
        </p>
      </div>
    </div>
  </div>
</section> */}

{/* Founders & Leadership Section */}
<section className="py-20 bg-[#F9F9F9]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
      Founders & Leadership
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img
          src={doc1}
          alt="Founder"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Dr. Srinidhi B.V</h3>
        <p className="text-primary-500 text-sm mb-2">Founder & CEO</p>
        <p className="text-sm text-[#383F45]">
          Dr. Srinidhi B.V is a visionary medical innovator passionate about merging artificial intelligence, molecular biology, and genomic science to redefine the future of healthcare.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <img
          src={founder2}
          alt="CTO"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Shweta K.V</h3>
        <p className="text-primary-500 text-sm mb-2">Co-Founder & COO</p>
        <p className="text-sm text-[#383F45]">
          Shweta K.V is a strategic healthcare innovator who bridges biomedical science, operations, and AI transformation.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <img
          src={founder3}
          alt="Program Director"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Lalith Aravindan</h3>
        <p className="text-primary-500 text-sm mb-2">Chief Technology Officer (CTO)</p>
        <p className="text-sm text-[#383F45]">
         Lalith Aravindan is a forward-thinking technologist and data scientist specializing in machine learning, deep learning, and full-stack AI development.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Advisory Board / Partners */}
{/* <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
      Advisory Board & Partners
    </h2>
    <p className="text-lg text-[#383F45] mb-10 max-w-3xl mx-auto">
      In Collaboration with Leading Medical Colleges & Healthcare Incubators.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-8">
      <img
        src="/images/partner1.png"
        alt="Partner 1"
        className="h-16 object-contain"
      />
      <img
        src="/images/partner2.png"
        alt="Partner 2"
        className="h-16 object-contain"
      />
      <img
        src="/images/partner3.png"
        alt="Partner 3"
        className="h-16 object-contain"
      />
    </div>
  </div>
</section> */}

{/* Testimonials */}
<section className="py-20 bg-[#F9F9F9]">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
      Testimonials
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-lg text-[#383F45] italic mb-4">
          “This program helped me understand how to validate AI tools for my patients.”
        </p>
        <p className="font-semibold text-primary-500">
          — Dr. ABC, Pilot Batch Participant
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-lg text-[#383F45] italic mb-4">
          “Finally a program where engineers understand how doctors think.”
        </p>
        <p className="font-semibold text-primary-500">
          — Engineer Participant
        </p>
      </div>
    </div>
  </div>
</section>

{/* Program Director’s Note */}
<section className="py-20 ">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left: Director Image */}
    <div className="md:w-1/3 flex justify-center md:justify-start">
      <img
        src={doc1} // replace with actual image path
        alt="Program Director"
        className="w-60 h-60 rounded-full object-cover shadow-lg"
      />
    </div>

    {/* Right: Note Text */}
    <div className="md:w-2/3 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Program Director’s Note
      </h2>
      <p className="text-lg text-[#383F45] leading-relaxed mb-6">
        <span className="text-2xl font-bold text-primary-500 mr-2">“</span>
        At AIGNOZ, our vision is to make AI and blockchain truly serve healthcare — not
        replace the clinician, but empower them. This program was born out of our belief
        that the next generation of breakthroughs will emerge when doctors and engineers
        speak a shared language. Together, we can ensure that innovation remains ethical,
        explainable, and patient-first. Join us in shaping the future of medicine and
        technology — where empathy meets intelligence, and collaboration creates impact.
        <span className="text-2xl font-bold text-primary-500 ml-2">”</span>
      </p>
      <p className="text-lg font-semibold text-gray-800">— Dr. Srinidhi B V , Program Director</p>
    </div>

  </div>
</section>




{/* Cohort Details & Apply */}
<section className="py-20 bg-[#F9F9F9]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">
      Cohort Details & Apply
    </h2>

    {/* Horizontal / Vertical Timeline */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
      {/* Horizontal line for large screens */}
      <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-primary-500 z-0"></div>

      {/* Timeline Cards */}
      {[
        { title: "Duration", desc: "8 Weeks" },
        { title: "Format", desc: "Hybrid (Video + Live + Hands-on Labs)" },
        { title: "Cohort Size", desc: "Limited to 10–15 per track for individual attention" },
        { title: "Next Cohort", desc: "[Insert Date Here]" },
        { title: "Fee", desc: "[Insert Fee]" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="relative md:flex-1 md:text-center mb-10 md:mb-0 z-10"
        >
          {/* Dot */}
          <div className="absolute md:static -left-6 md:top-0 md:mx-auto md:w-6 md:h-6 w-4 h-4 bg-primary-500 rounded-full border-2 border-white shadow-lg"></div>

          {/* Card */}
          <div className="bg-white p-6 rounded-xl shadow-md md:mx-4">
            <h3 className="text-xl font-semibold text-primary-500 mb-2">{item.title}</h3>
            <p className="text-[#383F45]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Apply Button */}
    <div className="mt-16">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-primary-500 text-white px-12 py-4 rounded-full font-semibold hover:bg-primary-700 transition shadow-lg"
      >
        Apply Now
      </button>
    </div>
  </div>
</section>




{/* Partnerships & Collaboration */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      Partnerships & Collaboration
    </h2>
    <p className="text-lg text-[#383F45] mb-12 max-w-3xl mx-auto">
      We partner with leading medical colleges & incubation centers to bring deep clinical insight and access to real medical innovation. Our MoUs ensure:
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-lg flex flex-col items-center">
        {/* Circle Accent */}
        <div className="w-16 h-16 flex items-center justify-center bg-primary-500 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Joint Projects</h3>
        <p className="text-[#383F45] text-center">
          Collaborate on pilot projects with our partner institutions for practical impact.
        </p>
      </div>

      <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-lg flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-primary-500 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m6 3H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Shared IP</h3>
        <p className="text-[#383F45] text-center">
          All collaborations are under our shared intellectual property framework.
        </p>
      </div>

      <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-lg flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-primary-500 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Co-branding</h3>
        <p className="text-[#383F45] text-center">
          Partner institutions gain recognition through co-branded initiatives and projects.
        </p>
      </div>
    </div>
  </div>
</section>




{/* FAQs Section */}
<section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 transition-all"
              >
                <span className="text-primary-500">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-500" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-[#383F45] text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* Contact & Get In Touch */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
      Contact & Get In Touch
    </h2>
    <p className="text-lg text-[#383F45] mb-4">
      Have questions or want to partner? Reach us at:
    </p>
    <div className="text-lg text-primary-500 font-medium space-y-2">
      <p>
        <a
          href="mailto:contact@aignoz.com"
          className="hover:underline hover:text-primary-700"
        >
          contact@aignoz.com
        </a>
      </p>
      <p>
        <a href="tel:+919597557036" className="hover:underline hover:text-primary-700">
          +91-9597557036
        </a>
      </p>
    </div>
  </div>
</section>



    </>
  );
};

export default Program;

