import mongoose from "mongoose";

const db = process.env.MONGO_URL;

const connectDB = () => {
  mongoose
    .connect(db, {})
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
      console.log("Failed to connect");
      console.log(e);
    });
};

// console.log(db);
export default connectDB;
