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
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 5, 2025</p>


                <p className='text-[16px] mt-10 font-[400] '>Welcome to Aignoz Healthcare. By accessing or using our website, services, or booking appointments through our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Acceptance of Terms</span></li>
                    <li><span className='text-primary-500'>Eligibility</span></li>
                    <li><span className='text-primary-500'>Use of Services</span></li>
                    <li><span className='text-primary-500'>Medical Disclaimer</span></li>
                    <li><span className='text-primary-500'>Appointments & Cancellations</span></li>
                    <li><span className='text-primary-500'>User Accounts</span></li>
                    <li><span className='text-primary-500'>Intellectual Property</span></li>
                    <li><span className='text-primary-500'>Privacy</span></li>
                    <li><span className='text-primary-500'>Limitation of Liability</span></li>
                    <li><span className='text-primary-500'>Changes of Terms</span></li>
                    <li><span className='text-primary-500'>Governing Law </span></li>
                    <li><span className='text-primary-500'>Contact Us</span></li>

                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Acceptance of Terms</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>By using our website or services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree, please do not use our platform.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>2. Eligibility</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>You must be at least 18 years old or have legal guardian consent to use this website and its services. By using our platform, you confirm that you meet these requirements.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>3. Use of Services</h1>

                <ul className='text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>The platform is designed to help you find doctors, view profiles, and book appointments.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>You agree not to misuse the services, upload false information, or attempt to disrupt or hack the platform.</span></li>

                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>4. Medical Disclaimer</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>The content on our website is for informational purposes only and should not be considered medical advice. Always consult a licensed healthcare provider for diagnosis and treatment.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>5. Appointments & Cancellations</h1>

                <ul className='text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>You agree to provide accurate information when booking.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Cancellation or rescheduling policies may vary based on the doctor or clinic’s individual rules.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>No-shows may result in fees or blocked access to future bookings.</span></li>

                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>6. User Accounts</h1>

                <ul className='text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>You may be required to register to access certain features.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>You are responsible for maintaining the confidentiality of your login details.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Any unauthorized use of your account must be reported immediately.</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>7. Intellectual Property</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>All content, graphics, logos, and design elements on this website are the property of Aignoz Healthcare and may not be reproduced or used without permission.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>8. Privacy</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Your privacy is important to us. Please refer to our [Privacy Policy] for information on how your data is collected, used, and protected.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>9. Limitation of Liability</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Aignoz Healthcare is not liable for any direct or indirect damages resulting from the use of our platform, including missed appointments or inaccurate information provided by healthcare professionals.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>10. Changes of Terms</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We reserve the right to update or modify these Terms and Conditions at any time. Continued use of our services implies acceptance of those changes.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>11. Governing Laws</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>These terms are governed by the laws of [Insert Region/Country], without regard to its conflict of law provisions.</p>



                <h1 className='text-[22px] mt-10 font-[400] '>12. Contact Us</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Have questions, concerns, or need support regarding your data or our services?
                    We're here to help and ensure your experience with Aignoz is safe and secure.</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'> <span className='text-black'>Address :</span> 123 HealthCare Avenue, MedCity, India</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'><span className='text-black'>Email :</span>  <span className='text-primary-500'>support@aignozhealth.com</span></span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'><span className='text-black'>Phone :</span>  +91 98765 43210</span></li>
                </ul>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Our support team is available Monday to Saturday, 9:00 AM – 6:00 PM IST.</p>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We value your trust and are committed to keeping your information private and protected.</p>




            </section>
        </>
    )
}

export default TermsAndConditions;
