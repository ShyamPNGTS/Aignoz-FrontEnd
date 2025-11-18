import React from 'react'

const ShippingPolicy = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Shipping and Delivery Policy
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className='section'>
                <p className='text-primary-500 my-5 italic text-[18px] font-[600] '>Effective May 5, 2025</p>


                <p className='text-[16px] mt-10 font-[400] '>As our services are fully digital, no physical shipping is applicable.</p>

                <h1 className='text-[22px] mt-10 font-[400] mb-5 '>Table of Contents</h1>

                <ul className='list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside '>
                    <li><span className='text-primary-500'>Service Delivery</span></li>
                    <li><span className='text-primary-500'>Timely Access</span></li>
                    <li><span className='text-primary-500'>Technical Failures</span></li>
                </ul>

                <h1 className='text-[22px] mt-10 font-[400] '>1. Service Delivery</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Once a consultation is booked and payment is confirmed, a confirmation email and/or SMS with the consultation link will be sent to the registered user.</p>


                <h1 className='text-[22px] mt-10 font-[400] '>2. Timely Access</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>Users must join the consultation at the scheduled time using the provided link. We are not responsible for missed appointments due to user delays.</p>


                <h1 className='text-[22px] mt-10 font-[400] '>3. Technical Failure</h1>

                <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>In case of a failed consultation due to technical issues, users may reschedule or request a refund based on eligibility under our refund policy.</p>

                 <p className='text-[16px] mt-5 text-[#383F45] font-[400] '>For further queries, contact our support team at aignozai@gmail.com.</p>


            </section>
        </>
    )
}

export default ShippingPolicy
