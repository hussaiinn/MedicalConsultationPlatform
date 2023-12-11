import { Schema, model, models } from "mongoose";

const DoctorInfor = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is requiredd"],
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    regno: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    hcname: {
      type: String,
      required: true,
    },
    statecouncil: {
      type: String,
      required: true,
    },
    practicetype: {
      type: String,
      required: true,
    },
    practicech: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    accname:{
      type: String,
      required: true,
    },
    accno:{
      type: Number,
      required: true,
    },
    bnkname:{
      type: String,
      required: true,
    },
    brnchname:{
      type: String,
      required: true,
    },
    ifsc:{
      type: String,
      required: true,
    },
    upi:{
      type: String,
      required: true,
    },
    // medicalDegree: {
    //   data: {
    //     type: String,
    //     required: true,
    //   },
    //   contentType: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // license:{
    //     data:Buffer,
    //     contentType:String,

    // },
    // rc:{
    //     data:Buffer,
    //     contentType:String,
    // },
    treatment: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const DocInfo = models.DocInfo || model("DocInfo", DoctorInfor);

export default DocInfo;
