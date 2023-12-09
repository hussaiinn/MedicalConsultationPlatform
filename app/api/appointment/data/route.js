import { connectToDB } from "@utils/database";
import Appointment from "@models/appointment";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    console.log("looking for appointments");

    const appt = await Appointment.find({});
    console.log(appt)
    return new Response(JSON.stringify(appt), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Appointments not found" },
      { status: 500 }
    );
  }
};

//not in use for now
