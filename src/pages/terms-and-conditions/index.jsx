import React from 'react'

const TermsAndConditions = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className='section'>
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 20, 2025</p>

                <p className='text-[16px] mt-5 font-[400] '>Welcome to our Doctor Consulting Platform ("Aignoz"). By using our services, you agree to the following terms and conditions:</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Overview</span></li>
                    <li><span className='text-primary-500'>User Eligibiity</span></li>
                    <li><span className='text-primary-500'>Doctor Registration</span></li>
                    <li><span className='text-primary-500'>Patient Use</span></li>
                    <li><span className='text-primary-500'>Limitation of Liability</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Overview</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We are a registered healthcare provider, incorporated on May 20, 2024, offering secure online audio and video consultations between verified doctors and patients.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>2. User Eligibiity</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Only qualified medical professionals and verified patients are permitted to use our services. Doctors must submit valid credentials at registration.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>3. Doctor Registration</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>All doctors must provide accurate licensing information, subject to verification. Providing false details may result in account termination.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>4. Patient Use</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Patients may book appointments, consult with doctors through video/audio calls, and receive advice. This platform is not for emergency or life-threatening conditions.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>5. Limitation of Liability</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We do not guarantee diagnosis accuracy or treatment outcomes. Use of the platform is at your own risk and discretion.</p>

            </section>
        </>
    )
}

export default TermsAndConditions;
