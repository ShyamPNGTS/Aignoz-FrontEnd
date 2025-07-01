import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className='section'>
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 20, 2025</p>

                <h1 className='text-[22px] mt-10 font-[400] '>Your Privacy Matters to Us</h1>

                <p className='text-[16px] mt-5 font-[400] '>This Privacy Policy outlines how we collect, use, and protect your information when you use our doctor consulting platform.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Information Collection</span></li>
                    <li><span className='text-primary-500'>Use of Information</span></li>
                    <li><span className='text-primary-500'>Data Protection</span></li>
                    <li><span className='text-primary-500'>Sharing of Information</span></li>
                    <li><span className='text-primary-500'>Your Rights</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Information Collection</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We collect personal information such as name, email, phone number, medical history (patients), and credentials (doctors) when you register or use our services.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>2. Use of Information</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Information is used for appointment management, communication, providing medical consultations, and improving our services.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>3. Data Protection</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We implement strict security protocols to protect your data, including encryption, secure access control, and regular audits.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>4. Sharing of Information</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We do not sell or rent personal information. Data may be shared with authorized healthcare professionals involved in your treatment.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>5. Your Rights</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>You may request access, updates, or deletion of your personal information at any time by contacting our support team.</p>

            </section>
        </>
    )
}

export default PrivacyPolicy
