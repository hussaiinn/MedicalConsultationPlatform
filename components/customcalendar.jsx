import { useState } from "react";
import styles from "@styles/customcaleder.module.css";

const CustomCalendar = ({ onSelectDate, onClose, grayedOutDates }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const checkCalander = [];

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
      // console.log(week);
      week.map((date, dayIndex) => {
        const orgdate = new Date(date);
        const formdate = orgdate.toISOString();
        checkCalander.push(formdate);
        // console.log(new Date(date).toISOString(),'    ',grayedOutDates.includes(new Date(date).toISOString()));
      });
    }

    return calendar;
  };
  // console.log(grayedOutDates.includes('2023-12-20T18:30:00.000Z'))
  console.log(selectedDate);
  const originalDate = new Date(selectedDate);

  const formattedDate = originalDate.toISOString();
  // console.log(typeof(formattedDate))
  // console.log(grayedOutDates.includes(formattedDate));
  // console.log('hey',grayedOutDates[20],'      ', selectedDate)

  const handleDateClick = (date) => {
    if (
      grayedOutDates.includes(new Date(date).toISOString()) ||
      new Date().toISOString() > new Date(date).toISOString() ||
      new Date(date).toDateString().includes("Sun")
    ) {
      alert(`This Date can not be selected `);
    } else {
      setSelectedDate(date);
      onSelectDate(date.toLocaleDateString()); // Format the date before passing it to the parent
    }
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
      <tr key={weekIndex}  className={styles.tableheads}>
        {week.map((date, dayIndex) => (
          <td
            key={dayIndex}
            onClick={() => date && handleDateClick(date)}
            // className={`${
            //   date &&
            //   (grayedOutDates.includes(date.toISOString().split("T")[0]) ||
            //     (selectedDate &&
            //       date.toDateString() === selectedDate.toDateString()))
            //     ? <p>grayed-out selected</p>
            //     : "husss"
            // }`}
            //  className={`${checkCalander.map((date)=>{
            //   grayedOutDates.includes(date)?styles.grayedouts:null
            //  })}`}
            className={`${
              grayedOutDates.includes(new Date(date).toISOString()) ||
              new Date().toISOString() > new Date(date).toISOString() ||
              new Date(date).toDateString().includes("Sun")
                ? styles.grayedouts
                : null
            }`}
          >
            {date && date.getDate()}
            {/* {console.log(grayedOutDates.includes(new Date(date).toISOString()))} */}
            {console.log(new Date(date).toDateString().includes("Sun"))}
          </td>
        ))}
        {/* {grayedOutDates.includes(formattedDate)?(
          alert('alread busy on this date')
        ):(
          <></>
        )} */}
      </tr>
    ));
  };

  return (
    <div className={styles.calendarContainer}>
      <table className={styles.tabless}>
        <thead>{renderHeader()}</thead>
        <tbody>{renderDays()}</tbody>
        <tfoot>
          {/* Close button */}
          <button onClick={onClose} className={styles.buttonclose}>Close</button>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomCalendar;
