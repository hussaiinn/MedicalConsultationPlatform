import mongoose from "mongoose";

export const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB: ',error)
    }
}



// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async() =>{
//     mongoose.set('strictQuery', true);

//     if(isConnected){
//         console.log('MongoDB is already connected');
//         return;
//     }

//     try{
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: 'docConnect',
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })

//         isConnected = true;

//         console.log('MongoDB connected')
//     }
//     catch(error){
//         console.log(error)
//     }
// }