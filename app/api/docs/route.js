import DocUser from "@models/doctorsignup";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(request){
    
    try{
        const {name, email} = await request.json();
        console.log(name, email)

        await connectToDB();
        await DocUser.create({name, email});
        return NextResponse.json({message: 'user registered'},{status: 201});
    }
    catch(error){
        return NextResponse.json({message: 'Error creating new user'},{status: 500})
    }
}