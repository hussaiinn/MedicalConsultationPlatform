import { connectToDB } from "@utils/database";
import DocInfo from "@models/doctorsinfo";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    console.log(params.email)
    await connectToDB();
    const info = await DocInfo.findOne({
      email: params.email,
    });
    console.log(info);
    if (info) {
      return new Response(JSON.stringify(info), { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating new user" },
      { status: 500 }
    );
  }
};
