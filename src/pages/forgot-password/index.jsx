import React, { useState } from 'react'
import logo from '../../assets/images/logo.png';
import sideImage from '../../assets/images/forgot-sideImg.png';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import OTPInput from '../../components/otp-input';


const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleNext = (e) => {
        e.preventDefault();
        if (isValidEmail(email)) {
            setStep(2);
        } else {
            alert("Please enter a valid email.");
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Handle OTP submission
        console.log("Submitted OTP:", otp);
    };
    return (
        <div className="min-h-screen justify-center items-center flex flex-col md:flex-row md:bg-contain md:bg-right bg-none md:bg-no-repeat md:bg-[url('/src/assets/images/login-bg-rectangle.png')]">
            {/* Left: Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12">
                <div className="flex-shrink-0 mx-auto cursor-pointer text-xl font-bold text-gray-800">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <h2 className="text-[24px] mt-10 font-[500] flex items-center gap-5 text-[#24292E] mb-4"><Link to={'/login'}><HiChevronLeft className="text-2xl text-gray-700" /></Link>Reset Password</h2>

                <form
                    className="mt-3 space-y-6"
                    onSubmit={step === 1 ? handleNext : handleOtpSubmit}
                >
                    {step === 1 && (
                        <div>
                            <label htmlFor="email" className="block text-[16px] font-medium text-[#24292E] mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <label className="block text-[16px] font-medium text-[#24292E] mb-1">
                                Enter <span className='font-[700]'>SIX</span> digit code we have sent to your email address to verify your new <span className='font-[700]'>AIGNOZ</span> Account
                            </label>
                            <OTPInput />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition"
                    >
                        {step === 1 ? "Send OTP" : "Verify & Continue"}
                    </button>
                </form>

                <div className="my-6 flex items-center gap-2">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-gray-400 text-sm">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <button className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>

                <p className="text-sm text-center mt-6">
                    Don’t have an account? <Link to={'/signup'}><span className="text-primary-600 hover:underline cursor-pointer">Sign up</span></Link>
                </p>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block">
                <img
                    src={sideImage}
                    alt="Login Illustration"
                    className="w-[100%] object-cover"
                />
            </div>
        </div>
    )
}

export default ForgotPassword;
