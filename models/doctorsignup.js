import { Schema, model, models } from "mongoose";

const DoctorsSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'Username is required']
        },
        email:{
            type: String,
            required : [true, 'Email is required']
        },
        usertype:{
            type: String,
            default: 'Doctor'
        },
        verified:{
            type: Boolean,
            default: false,
        }
    },
    {timestamps: true}
)

const DocUser = models.DocUser || model('DocUser', DoctorsSchema)

export default DocUser;