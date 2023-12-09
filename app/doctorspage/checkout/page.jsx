// pages/index.js
"use client";
import { useEffect, useState } from "react";
import style from "@styles/checkout.module.css";
import CustomCalendar from "@components/customcalendar";
import TimeSlotSelect from "@components/timeslot";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { get } from "mongoose";
import { useSession } from "next-auth/react";

const IndexPage = ({ params }) => {
  const [column1Expanded, setColumn1Expanded] = useState(true);
  const [column2Expanded, setColumn2Expanded] = useState(false);
  const [column3Expanded, setColumn3Expanded] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const searchParams = useSearchParams();
  const [docData, setDocData] = useState();
  const [userData, setUserData] = useState();
  const [userEmail, setUserEmail] = useState(null);
  const [timeSlots, setTimeSlots] = useState(null);
  const [grayedOutDates, setGrayedOutDates] = useState([]);
  const [grayedOutTimeSlots, setGrayedOutTimeSlots] = useState([]);
  const { data: session } = useSession();
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentData, setAppointmentData] = useState({
    docId: "",
    userId: "",
    patientName: "",
    date: "",
    time: "",
    trnsId: "",
    accName: "",
    amtPaid: "",
    approved: false,
    reject: false,
  });

  const handleappointmentData = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setAppointmentData((crrFormData) => {
      crrFormData[field] = value;
      return { ...crrFormData };
    });
  };

  const handlefinalSubmit = async (e) => {
    e.preventDefault();
    if (docData.email && userData.email) {
      appointmentData.docId = docData.email;
      appointmentData.userId = userData.email;
      // appointmentData.patientName = userData.name;
      appointmentData.date = selectedDate;
      appointmentData.time = selectedTime;
      // console.log(appointmentData.accName);
      // console.log(appointmentData.amtPaid);
      // console.log(appointmentData.date);
      // console.log(appointmentData.time);
      // console.log(appointmentData.trnsId);
      // console.log(appointmentData.docId);
      // console.log(appointmentData.userId);
      // console.log(appointmentData.patientName);
      try {
        const res = await fetch(`../../api/appointment/new`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(appointmentData),
        });
        if (res.ok) {
          alert("data stored");
        }
      } catch (error) {
        console.log("Error in storing appointment");
        console.log(error);
      }
    }
  };

  const handletimeselect = (time) => {
    setSelectedTime(time);
  };

  const handledatetime = (e) => {
    e.preventDefault();
    // console.log(selectedTime);
    // console.log(selectedDate);
  };

  useEffect(() => {
    const getData = async () => {
      let email = searchParams.get("id");
      const response = await fetch(`/api/docs/${email}/docinfo`);
      const data = await response.json();
      setDocData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    // Check if the session has loaded before using it
    if (session?.user?.email) {
      setUserEmail(session.user.email);
    }
  }, [session]);

  useEffect(() => {
    console.log(userEmail);
    const getUserInfo = async () => {
      if (userEmail) {
        const userresponse = await fetch(`/api/users/${userEmail}/userdata`);
        const userdata = await userresponse.json();
        setUserData(userdata);
      }
    };

    getUserInfo();
  }, [userEmail]);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        let email5 = searchParams.get("id");
        const response = await fetch(`/api/appointment/appdata/${email5}/data`);
        const data1 = await response.json();
        setTimeSlots(data1);
        console.log(data1);
        // console.log(timeSlots);
      } catch (error) {
        console.error("Error fetching time slots:", error);
      }
    };

    fetchTimeSlots();
  }, []);

  useEffect(() => {
    console.log(timeSlots); // This will log the updated timeSlots state
    const currentDate = new Date();
    const today = currentDate.toISOString().split("T")[0];
    if (timeSlots) {
      const bookedDates = timeSlots
        .filter((slot) => slot.approved)
        .map((slot) => slot.date);

      const pastDates = timeSlots
        .filter((slot) => new Date(slot.date) < currentDate)
        .map((slot) => slot.date);

      setGrayedOutDates([...bookedDates, ...pastDates, today]);
      console.log(grayedOutDates);
      const bookedTimeSlots = timeSlots
        .filter((slot) => slot.approved)
        .map((slot) => slot.time);

      setGrayedOutTimeSlots(bookedTimeSlots);
      console.log(grayedOutTimeSlots)
    }
  }, [timeSlots]);

  console.log(docData);
  console.log(userData);

  const handleColumn1Submit = () => {
    // Perform validation or other logic as needed before moving to the next column
    setColumn1Expanded(false);
    setColumn2Expanded(true);
  };

  const handleColumn2Submit = () => {
    // Perform validation or other logic as needed before moving to the next column
    setColumn2Expanded(false);
    setColumn3Expanded(true);
  };

  const handleColumn3Submit = () => {
    // Perform validation or other logic as needed before completing the process
    // You can add redirect logic or other actions here
  };

  const openCalendar = () => {
    setCalendarOpen(true);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.column} ${column1Expanded ? style.expanded : ""}`}
      >
        {/* Column 1: Personal Details */}
        <h2>Personal Details</h2>
        {/* Your form for personal details */}
        <input
          type="text"
          placeholder="your name"
          name="patientName"
          value={appointmentData.patientName}
          onChange={handleappointmentData}
        />
        <button onClick={handleColumn1Submit}>Next</button>
      </div>
      <div
        className={`${style.column} ${column2Expanded ? style.expanded : ""}`}
      >
        {/* Column 2: Select Date and Time */}
        <h2>Select Date and Time</h2>
        <form action="" onSubmit={handledatetime}>
          <input
            type="text"
            placeholder="date"
            value={selectedDate}
            onFocus={openCalendar}
            name="date"
            readOnly
          />
          <TimeSlotSelect onSelect={handletimeselect} grayedOutTimeSlots={grayedOutTimeSlots} />
          <button type="submit" onClick={handleColumn2Submit}>
            Next
          </button>
        </form>
      </div>
      <div
        className={`${style.column} ${column3Expanded ? style.expanded : ""}`}
      >
        {/* Column 3: Payment Option */}
        <h2>Payment Option</h2>
        {/* Your form for payment option */}
        <form action="" onSubmit={handlefinalSubmit}>
          <input
            type="text"
            placeholder="Taransaction ID"
            name="trnsId"
            value={appointmentData.trnsId}
            onChange={handleappointmentData}
          />
          <input
            type="text"
            placeholder="Accound holder Name"
            name="accName"
            value={appointmentData.accName}
            onChange={handleappointmentData}
          />
          <input
            type="text"
            placeholder="Amount Paid"
            name="amtPaid"
            value={appointmentData.amtPaid}
            onChange={handleappointmentData}
          />
          <label htmlFor="ss">Upload Payment Screen shot</label>
          <input type="file" id="ss" />
          <button type="submit" onClick={handleColumn3Submit}>
            Submit
          </button>
        </form>
      </div>
      <div className={style.doctorDetails}>
        {/* Right side: Doctor's Details */}
        {/* Your content for doctor details */}
      </div>
      {/* Calendar component */}
      {calendarOpen && (
        <CustomCalendar
          onSelectDate={setSelectedDate}
          onClose={closeCalendar}
          grayedOutDates={grayedOutDates}
        />
      )}{" "}
      <br />
      {/* {docData.firstName} */}
      {/* {userData.name} */}
    </div>
  );
};

export default IndexPage;
