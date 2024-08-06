import express from "express";
import mongoose from "mongoose";
import connectDB from "./helper/db.js";

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

const NewSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  isActive: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

const UserModel = mongoose.model("User", NewSchema);

const babai = new UserModel({ name: "babai", email: "babai@gmail.com" });
babai.save();
console.log(babai);

app.get("/testapi", (req, res) => {
  res.json({
    testapi: true,
  });
});

app.get("/", (req, res) => {
  res.send("Hello, World! from server side api");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on ${port}`);
});
