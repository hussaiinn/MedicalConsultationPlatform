import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema({
  docId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  trnsId: {
    type: String,
    required: true,
  },
  accName: {
    type: String,
    required: true,
  },
  amtPaid: {
    type: Number,
    required: true,
  },
  mobile:{
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },

  reject: {
    type: Boolean,
    default: false,
  },
});

const Appointment =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;
