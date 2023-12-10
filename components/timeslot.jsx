// components/TimeSlotSelect.js
import React, { useEffect, useState } from "react";
import styles from "@styles/customcaleder.module.css";

const TimeSlotSelect = ({
  onSelect,
  grayedOutTimeSlots,
  selectedDate,
  data,
}) => {
  // Generate time slots from 8 am to 9 pm with a 30-minute interval
  const [graytimes, setGrayedtimes] = useState(null);
  console.log(selectedDate);
  console.log(data);
  useEffect(() => {
    console.log("changed");
    console.log(new Date(selectedDate).toDateString());
    if (data) {
      const filteredData = data.filter((item) => {
        console.log(
          new Date(item.date).toDateString() ===
            new Date(selectedDate).toDateString()
        );
        return (
          new Date(item.date).toDateString() ===
          new Date(selectedDate).toDateString()
        );
      });
      console.log(filteredData);
      if (filteredData) {
        const tmarray = filteredData.map((item) => item.time);
        console.log(tmarray);
        setGrayedtimes(tmarray);
      }
    }
  }, [selectedDate]);

  if (graytimes) {
    console.log(graytimes);
  }

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
    <select onChange={(e) => onSelect(e.target.value, graytimes)}>
      <option value="">Select a Time Slot</option>
      {timeSlots.map((slot, index) => (
        <option
          key={index}
          value={slot.value}
          className={
            graytimes?.includes(slot.value) ? styles.grayedouts : ""
          }
        >
          {slot.label}
        </option>
      ))}
    </select>
  );
};

export default TimeSlotSelect;
