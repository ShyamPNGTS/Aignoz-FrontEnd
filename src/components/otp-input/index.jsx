import { useRef, useState } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex mt-4 gap-4">
      {otp.map((digit, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          value={digit}
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleChange(e.target, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-16 h-16 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      ))}
    </div>
  );
}

