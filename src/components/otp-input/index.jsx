import { useRef } from "react";

export default function OTPInput({ value, onChange }) {
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
  const val = element.value.replace(/[^0-9]/g, "");

  const newOtp = [...value];
  newOtp[index] = val;
  onChange(newOtp);

  // Move to next input only if a value was typed
  if (val && index < 5) {
    inputsRef.current[index + 1].focus();
  }
};


  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex mt-4 gap-4">
      {value.map((digit, i) => (
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
