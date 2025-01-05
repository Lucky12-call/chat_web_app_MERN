import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected: ${response.connection.host}`);
  } catch (error) {
    console.log(`error white connecting to db: ${error.message}`);
  }
};

export { connectDB };
