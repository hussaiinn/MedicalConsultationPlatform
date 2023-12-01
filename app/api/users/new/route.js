import NewUser from "@models/newuser";
import { connectToDB } from "@utils/database";
import bcrypt from "bcryptjs";

import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      dob,
      gender,
      mobile,
      address,
      password,
      cnfpass,
    } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10)
    // const cnfhashedPassword = await bcrypt.hash(cnfpass, 10)
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();

    // if (!userId || !name || !email || !dob || !gender || !mobile || !address || !password || !cnfpass) {
    //     return Response.json({ message: 'All fields are required' });
    // }

    await NewUser.create({
      userId,
      name,
      email,
      dob,
      gender,
      mobile,
      address,
      password: hashedPassword,
      cnfpass,
    });
    return NextResponse.json({ message: "user created" }, { status: 201 });

    // return res.status(200).json({ message: 'Hello from Next.js!' })
    // return res.({ message: 'User registered' }, { status: 201 })
  } catch (error) {
    // return (`Erro createing new use ${error}`, { status: 500 });
    // return res.status(500).json({ message: 'Error creating a new user' })
    return NextResponse.json(
      { message: "Error creating a new user" },
      { status: 500 }
    );
  }
};
