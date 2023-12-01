import { connectToDB } from "@utils/database";
import Appointment from "@models/appointment";

//PATCH UPDATE
export const PATCH = async (request, { params }) => {
  const { approved, action } = await request.json();
  console.log(approved, action, params.id);

  try {
    await connectToDB();

    const existingappointment = await Appointment.findById(params.id);
    console.log(existingappointment.action);

    if (!existingappointment)
      return new Response("Appointment not found", { status: 404 });

    if (action === "approved") {
      existingappointment.approved = approved;
    }
    if(action === 'reject'){
        existingappointment.reject=approved;
    }

    await existingappointment.save();

    return new Response(JSON.stringify(existingappointment), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", {
      status: 500,
    });
  }
};
