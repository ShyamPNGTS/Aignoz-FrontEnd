import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const generateNext7Days = (offset = 0) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i + offset);
    dates.push({
      date: date.getDate(),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      fullDate: date.toISOString().split("T")[0],
    });
  }
  return dates;

};


const AppointmentSlots = ({ id }) => {
  const [offset, setOffset] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const dates = generateNext7Days(offset);
  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);

  const slots = ["10:00 AM", "11:30 AM", "01:00 PM", "03:00 PM", "05:30 PM", "7:10 PM"];

  return (
    <div className="lg:w-1/2 w-full mt-6 bg-[#BE34EA1A] lg:mt-0 rounded-2xl shadow-lg p-4 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Select Date</h2>

      {/* Date Carousel */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => {
            if (offset > 0) setOffset(offset - 7);
          }}
          disabled={offset <= 0}
        >
          <FaChevronLeft
            className={`text-gray-500 cursor-pointer hover:text-primary-500 ${offset <= 0 ? "opacity-30 cursor-not-allowed" : ""
              }`}
          />
        </button>

        <div className="flex gap-2 overflow-hidden">
          {dates.map((item) => (
            <div
              key={item.fullDate}
              onClick={() => setSelectedDate(item.fullDate)}
              className={`cursor-pointer px-4 py-2 rounded-lg text-center border ${selectedDate === item.fullDate
                ? "bg-primary-500 text-white"
                : "bg-gray-100"
                }`}
            >
              <p className="text-sm font-semibold">{item?.day}</p>
              <p className="text-lg">{item?.date}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            if (offset + 7 < 14) setOffset(offset + 7);
          }}
          disabled={offset + 7 >= 14}
        >
          <FaChevronRight
            className={`text-gray-500 cursor-pointer hover:text-primary-500 ${offset + 7 >= 14 ? "opacity-30 cursor-not-allowed" : ""
              }`}
          />
        </button>
      </div>

      {/* Slots */}
      <h3 className="text-lg font-semibold mb-2">Available Slots</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {slots.map((slot, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(index)}
            className={`px-4 ${selectedTime === index
              ? "bg-primary-500 text-white"
              : "bg-gray-100"
              } cursor-pointer py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition`}
          >
            {slot}
          </button>
        ))}
      </div>
      <Link state={{
        selectedDate,
        selectedTime: slots[selectedTime], 
      }} to={selectedDate && selectedTime !== null ? `/confirm-appointment/${id}` : "#"}>
        <button disabled={!selectedDate || selectedTime === null} className={`px-4 py-2 rounded-lg transition ${!selectedDate || selectedTime === null
          ? "bg-gray-300 cursor-not-allowed text-gray-500"
          : "bg-primary-500 hover:bg-primary-600 cursor-pointer text-white"
          }`}>
          Book Appointment
        </button>
      </Link>
    </div>
  );
}

export default AppointmentSlots;

