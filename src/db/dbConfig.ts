import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectInstence = await mongoose.connect(`${process.env.MONGO_URI}/next-auth`);
        console.log("MongoDB Connected!!", connectInstence.connection.host);
    } catch (error) {
        console.log("Got an error while connecting db: ", error);
        process.exit(1);
    }
}

export default connectDB;