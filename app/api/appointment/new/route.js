import { connectToDB } from "@utils/database";
import Appointment from "@models/appointment";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    
    const {
      docId,
      userId,
      patientName,
      date,
      time,
      trnsId,
      accName,
      amtPaid,
      mobile,
      approved,
      reject,
    } = await req.json();
    console.log(docId, userId, amtPaid, date, time, trnsId, accName, amtPaid, approved, reject)
    await connectToDB();
    await Appointment.create({
      docId,
      userId,
      patientName,
      date,
      time,
      trnsId,
      accName,
      amtPaid,
      mobile,
      approved,
      reject,
    });

    return NextResponse.json(
      { message: "Appointment created" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Error creating a new appointment" },
      { status: 500 }
    );
  }
};
