import DocInfo from "@models/doctorsinfo";
import { connectToDB } from "@utils/database";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      dob,
      email,
      mobile,
      address,
      qualification,
      regno,
      specialization,
      experience,
      hcname,
      statecouncil,
      practicetype,
      practicech,
      fees,
      accname,
      accno,
      bnkname,
      brnchname,
      ifsc,
      upi,
      // medicalDegree,
      //   license,
      //   rc,
      treatment,
    } = await req.json();

    console.log("in api for data storing");
    console.log("receive data:", {
      firstName,
      lastName,
      gender,
      dob,
      email,
      mobile,
      address,
      qualification,
      regno,
      specialization,
      experience,
      hcname,
      statecouncil,
      practicetype,
      practicech,
      fees,
      accname,
      accno,
      bnkname,
      brnchname,
      ifsc,
      upi,
      // medicalDegree,
      //   license,
      //   rc,
      treatment,
    });

    await connectToDB();

    await DocInfo.create({
      firstName,
      lastName,
      gender,
      dob,
      email,
      mobile,
      address,
      qualification,
      regno,
      specialization,
      experience,
      hcname,
      statecouncil,
      practicetype,
      practicech,
      fees,
      accname,
      accno,
      bnkname,
      brnchname,
      ifsc,
      upi,
      // medicalDegree: {
      //   data: "base64-encoded-image-data",
      //   contentType: "image/jpeg",
      // },
      //   license,
      //   rc,
      treatment,
    });
    return NextResponse.json({ message: "data stored" }, { status: 201 });

    // await DocInfo.create({});
  } catch (error) {
    return NextResponse.json(
      { message: "Error storing data" },
      { statsu: 500 }
    );
  }
};
