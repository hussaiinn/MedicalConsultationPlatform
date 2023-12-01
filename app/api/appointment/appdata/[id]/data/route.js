import { connectToDB } from "@utils/database";
import Appointment from "@models/appointment";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    // const {email} = req.json();
    console.log(params.id);
    await connectToDB();
    console.log("looking for dbs");
    const appointdata = await Appointment.find({
      docId: params.id,
    });
    if (appointdata.length === 0) {
      const appointdata1 = await Appointment.find({
        userId: params.id,
      });
      return new Response(JSON.stringify(appointdata1), { status: 200 });
      console.log(appointdata1)
    }
    return new Response(JSON.stringify(appointdata), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Appointment not found" },
      { status: 500 }
    );
  }
};
