// components/TimeSlotSelect.js
import React from "react";

const TimeSlotSelect = ({ onSelect }) => {
  // Generate time slots from 8 am to 9 pm with a 30-minute interval
  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentTime = new Date();
    currentTime.setHours(8, 0, 0, 0); // Start from 8 am

    const endTime = new Date();
    endTime.setHours(21, 0, 0, 0); // End at 9 pm

    while (currentTime <= endTime) {
      timeSlots.push({
        value: currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        label: currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      currentTime.setMinutes(currentTime.getMinutes() + 30); // Move to the next 30-minute interval
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a Time Slot</option>
      {timeSlots.map((slot, index) => (
        <option key={index} value={slot.value}>
          {slot.label}
        </option>
      ))}
    </select>
  );
};

export default TimeSlotSelect;
