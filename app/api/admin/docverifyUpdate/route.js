import { connectToDB } from "@utils/database";
import DocUser from "@models/doctorsignup";
import { NextResponse } from "next/server";
import NewUser from "@models/newuser";

export const POST = async (req, res) => {
  try {
    // const { email } = await req.json();
    console.log("in doc api");
    const { id, action } = await req.json();
    console.log("fdsa", action);
    await connectToDB();
    if (action == "unverify") {
      const doc = await DocUser.updateOne({ _id: id }, { verified: false });
      if (doc) {
        return new Response(JSON.stringify(doc), { status: 200 });
      }
    } else if (action == "verify") {
      const doc = await DocUser.updateOne({ _id: id }, { verified: true });
      if (doc) {
        return new Response(JSON.stringify(doc), { status: 200 });
      }
    } else if (action === "delete") {
      const doc = await NewUser.deleteOne({ _id: id });
      if (doc) {
        return new Response(JSON.stringify(doc), { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Doctor not found",
      },
      { status: 500 }
    );
  }
};
