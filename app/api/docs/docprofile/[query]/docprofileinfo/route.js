import { connectToDB } from "@utils/database";
import DocInfo from "@models/doctorsinfo";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    console.log("look for info");

    const docprofile = await DocInfo.find({});
    return new Response(JSON.stringify(docprofile), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Doctor not found",
      },
      { status: 500 }
    );
  }
};
