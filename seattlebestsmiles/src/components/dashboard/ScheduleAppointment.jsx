import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduleAppointment = () => {
  const [service, setService] = useState("");
  const [slot, setSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const services = ["Cleaning", "Exam", "Whitening"];
  const slots = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]; 

  const handleBooking = () => {
    if (!service || !slot) {
      alert("Please select a service and a time slot.");
      return;
    }
    alert(`Appointment booked for ${service} on ${selectedDate.toDateString()} at ${slot}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Schedule Appointment</h2>
      <div className="space-y-2">
        <div>
          <label className="block text-gray-600">Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Service --</option>
            {services.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Time Slot</label>
          <select
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Slot --</option>
            {slots.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleBooking}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ScheduleAppointment;