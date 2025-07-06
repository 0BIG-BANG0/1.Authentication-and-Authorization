import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('MOngoDB Connected;')
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit()
    }
}
export default connectDB;