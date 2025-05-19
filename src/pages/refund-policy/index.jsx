import React from 'react'

const RefundPolicy = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Refund Policy
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className='section'>
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 5, 2025</p>


                <p className='text-[16px] mt-10 font-[400] '>At Aignoz Healthcare, we strive to provide transparent and patient-friendly services. This refund policy outlines the terms under which refunds are issued for appointments booked through our platform.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Eligibility for Refund</span></li>
                    <li><span className='text-primary-500'>Non-Refundable Situations</span></li>
                    <li><span className='text-primary-500'>Refund Process</span></li>
                    <li><span className='text-primary-500'>Refund Timeline</span></li>
                    <li><span className='text-primary-500'>Contact Us</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Eligibility for Refund</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Refunds are considered in the following cases :</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Doctor Unavailability : If your appointment is cancelled due to the doctor's unavailability and no alternative slot is suitable.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Double Payment : If you were charged twice for the same booking.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Failed Transaction : If a payment was deducted but the appointment was not confirmed.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Cancellations Within Time Limit : If a user cancels the appointment within the permitted cancellation window (usually 24 hours before the appointment).</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>2. Non-Refundable Situations</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Refunds will not be issued in the following scenarios:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>No-Show : If the patient does not show up for the appointment.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Late Cancellation : If the cancellation is made after the allowed time window.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Change of Mind : If you choose to cancel for personal reasons beyond the platform's or doctor's control.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Teleconsultations Already Conducted : Once a consultation has been completed, no refund will be provided.</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>3. Refund Process</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>To request a refund, please follow these steps:</p>

                <h3 className='text-[16px] my-5 font-[400]'>3.1 Email us at <span className='text-primary-500'>support@aignoz.com</span> with the subject line : Refund Request.</h3>

                <h3 className='text-[16px] my-5 font-[400]'>3.2 Include the following details :</h3>

                <ul className='text-[16px] font-[400] flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Full name</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Appointment ID</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Date of Appointment</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Reason for Refund</span></li>
                </ul>

                <h3 className='text-[16px] my-5 font-[400]'>3.3 Our support team will review your request and get back to you within 5–7 business days.</h3>

                <h1 className='text-[22px] mt-10 font-[400] '>4. Refund Timeline</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Once your refund is approved :</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Online payments : Will be credited back to your original payment method within 7–10 business days.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>UPI/Bank Transfers : May take up to 10 working days depending on your bank.</span></li>
                </ul>


                <h1 className='text-[22px] mt-10 font-[400] '>5. Contact Us</h1>

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

export default RefundPolicy
