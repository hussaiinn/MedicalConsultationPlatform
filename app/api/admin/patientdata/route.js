import { connectToDB } from "@utils/database";
// import DocUser from "@models/doctorsignup";
import NewUser from "@models/newuser";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    // const { email } = await req.json();
    console.log('in doc api')
    await connectToDB();
    const doc = await NewUser.find();
    if (doc) {
      return new Response(JSON.stringify(doc), { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Doctor not found"},
      {status: 500});
  }
};
