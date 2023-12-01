import { Schema, model, models } from "mongoose";

const NewuserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        unique: [true, 'Email alreay exist'],
        required: [true, 'Email is required']
    },
    dob: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile number is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
        maxLength: 1024,
    },
    cnfpass: {
        type: String,
        required: [true, 'Confirm Password is required'],
    },
    usertype:{
        type: String,
        default: 'patient'
    }
},
    { timestamps: true }
);


// NewuserSchema.pre('save', async function (next) {
//     const user = this;

//     if (user.isModified('password') || user.isNew) {
//         try {
//             const salt = await bcrypt.genSalt(10);
//             const hash = await bcrypt.hash(user.password, salt);
//             user.password = hash;
//             next();
//         } catch (err) {
//             return next(err);
//         }
//     } else {
//         return next();
//     }
// });

// //method to compare passwords
// NewuserSchema.methods.comparePassword = function(password){
//     //return true or false based on the comparison of plain text and encrypted password
//     return bcrypt.compare(password , this.password );
// }



const NewUser = models.NewUser || model('NewUser', NewuserSchema);

export default NewUser;