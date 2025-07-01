import React from 'react'

const RefundPolicy = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Refund and Cancellation Policy
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className='section'>
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 5, 2025</p>


                <p className='text-[16px] mt-10 font-[400] '>This Refund and Cancellation Policy applies to all services provided by our online doctor consultation platform registered on May 20, 2024.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Refund Eligibility</span></li>
                    <li><span className='text-primary-500'>Cancellation Policy</span></li>
                    <li><span className='text-primary-500'>Refund Process</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Refund Eligibility</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Refunds will be considered under the following circumstances:</p>

                <ul className='text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside '>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Technical issues preventing a completed consultation.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Doctor did not attend the scheduled consultation.</span></li>
                    <li><span className='text-[16px] mt-5 text-[#383F45] font-[400]'>Accidental double bookings or payment failures.</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>2. Cancellation Policy</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Users may cancel their appointment at least 2 hours before the scheduled time to be eligible for a full refund. Cancellations made after this time may not be eligible.</p>


                <h1 className='text-[22px] mt-10 font-[400] '>3. Refund Process</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Refunds will be processed within 5-7 business days to the original payment method. Users must contact support with transaction details to initiate the process.</p>

                 <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>For further queries, contact our support team at support@yourdomain.com.</p>


            </section>
        </>
    )
}

export default RefundPolicy
