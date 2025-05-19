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
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 5, 2025</p>

                <h1 className='text-[22px] mt-10 font-[400] '>Your Privacy Matters to Us</h1>

                <p className='text-[16px] mt-5 font-[400] '>At <span className='text-primary-600 font-[600]'>Aignoz</span>, we are committed to protecting the privacy and security of your personal health information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you interact with our website, mobile platform, or use any of our services.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Introduction</span></li>
                    <li><span className='text-primary-500'>Information we collect</span></li>
                    <li><span className='text-primary-500'>How We Use Your Information</span></li>
                    <li><span className='text-primary-500'>Data Sharing & Disclosure</span></li>
                    <li><span className='text-primary-500'>Data Security</span></li>
                    <li><span className='text-primary-500'>Your Rights</span></li>
                    <li><span className='text-primary-500'>Cookies & Tracking Technologies</span></li>
                    <li><span className='text-primary-500'>Children’s Privacy</span></li>
                    <li><span className='text-primary-500'>Changes to This Policy</span></li>
                    <li><span className='text-primary-500'>Contact Us</span></li>

                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Introduction</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Your privacy is our priority. This policy has been created to help you understand the types of information we collect, why we collect it, and how it’s handled. Whether you're booking an appointment, signing up for health newsletters, or browsing doctor profiles — we are fully transparent in how your information is used.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>2. Information We Collect</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We may collect the following types of information:</p>

                <h3 className='text-[18px] my-5 font-[400]'>2.1 Personal Information</h3>

                <ul className='text-[16px] font-[400] flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Full name</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Date of birth/Age</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>How We Use Your Information</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Data Sharing & Disclosure</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Data Security</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Your Rights</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Cookies & Tracking Technologies</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Children’s Privacy</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Changes to This Policy</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Contact Us</span></li>

                </ul>

                <h3 className='text-[18px] my-5 font-[400]'>2.2 Technical Data</h3>

                <ul className='text-[16px] font-[400] flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>IP Address</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Browser type and device</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Pages visited and interaction history</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Cookies and similar tracking technologies</span></li>


                </ul>

                <h3 className='text-[18px] my-5 font-[400]'>2.3 Other Voluntary Information</h3>

                <ul className='text-[16px] font-[400] flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Feedback submitted through forms</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Information submitted on behalf of a family member (dependents)</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>3. How We Use Your Information</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Your data helps us deliver better and safer healthcare experiences. We use your information to:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Schedule and manage appointments with healthcare professionals</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Send you booking confirmations, reminders, and updates</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Respond to queries and improve patient support</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Customize and enhance your experience on our platform</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Maintain medical records as required by law</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>4. Data Sharing & Disclosure</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We do not sell or rent your personal data to third parties. However, we may share your information with:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Medical professionals and staff: To provide effective healthcare services</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Third-party vendors: Such as cloud hosting, payment gateways, or SMS/email service providers (who comply with data protection rules)</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Legal authorities: If required to comply with laws, court orders, or protect our legal rights</span></li>
                </ul>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>All partners and vendors are bound by strict confidentiality agreements.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>5. Data Security</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We use strong administrative, technical, and physical safeguards to secure your information:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>SSL encryption for data transmission</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Secure servers and firewalls</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Access controls and employee training</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Regular monitoring and audits</span></li>
                </ul>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Despite our efforts, no method of transmission over the internet is 100% secure. We encourage users to keep their account credentials confidential.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>6. Your Rights</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Depending on your location and applicable laws, you have the right to:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Access your personal data</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Request correction of inaccurate data</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Request deletion (under permitted circumstances)</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Object or restrict certain uses of your data</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Withdraw consent for marketing or non-essential communication</span></li>
                    
                </ul>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>To exercise any of these rights, contact us at <span className='text-primary-500'>support@aignozhealth.com</span></p>

                <h1 className='text-[22px] mt-10 font-[400] '>7. Cookies & Tracking Technologies</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We use cookies to personalize your browsing experience and analyze website traffic. You can adjust cookie preferences through your browser settings.</p>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Types of cookies used:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Essential cookies (for core functionality)</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Analytical cookies (to measure usage patterns)</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Functional cookies (to remember user preferences)</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>8. Children's Privacy</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Our services are not intended for individuals under the age of 13 without parental consent. If we become aware that we have collected data from a minor without consent, we will delete it promptly.</p>

                <h1 className='text-[22px] mt-10 font-[400] '>9. Changes to This Policy</h1>

<p className='text-[16px] mt-5 text-[#383F45] font-[400] '>We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top. Significant changes will be communicated through our website or via email.</p>

<h1 className='text-[22px] mt-10 font-[400] '>10. Contact Us</h1>

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

export default PrivacyPolicy
