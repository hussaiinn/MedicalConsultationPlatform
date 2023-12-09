import { useState } from "react";

const CustomCalendar = ({ onSelectDate, onClose, grayedOutDates }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const generateCalendar = () => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth.getDay()) {
          week.push(null); // Empty cell for days before the 1st day of the month
        } else if (dayCounter > lastDayOfMonth.getDate()) {
          break; // Stop once we've reached the end of the month
        } else {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            dayCounter
          );
          week.push(date);
          dayCounter++;
        }
      }

      calendar.push(week);
    }

    return calendar;
  };
  console.log(grayedOutDates.includes('2023-12-20T18:30:00.000Z'))

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onSelectDate(date.toLocaleDateString()); // Format the date before passing it to the parent
  };

  const renderHeader = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <tr>
        {weekdays.map((day, index) => (
          <th key={index}>{day}</th>
        ))}
      </tr>
    );
  };

  const renderDays = () => {
    const calendar = generateCalendar();

    return calendar.map((week, weekIndex) => (
      <tr key={weekIndex}>
        {week.map((date, dayIndex) => (
          <td
            key={dayIndex}
            onClick={() => date && handleDateClick(date)}
            className={`${
              date &&
              (grayedOutDates.includes(date.toISOString().split("T")[0]) ||
                (selectedDate &&
                  date.toDateString() === selectedDate.toDateString()))
                ? <p>grayed-out selected</p>
                : "husss"
            }`}
          >
            {date && date.getDate()} 
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="calendar-container">
      <table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderDays()}</tbody>
        <tfoot>
          {/* Close button */}
          <button onClick={onClose}>Close</button>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomCalendar;
