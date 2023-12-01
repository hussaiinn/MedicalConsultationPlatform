import { connectToDB } from "@utils/database";
import NewUser from "@models/newuser";
import { NextResponse } from "next/server";
import DocUser from "@models/doctorsignup";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const user = await NewUser.findOne({
      email: params.id,
    });
    // console.log(user)
    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    }
    const docUser = await DocUser.findOne({
      email: params.id
    })
    if(docUser){
      console.log('in doc user')
      return new Response(JSON.stringify(docUser),{status: 200})
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating new user" },
      { status: 500 }
    );
  }
};
