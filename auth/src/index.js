import express from "express";
import connectDB from "./helper/db.js";

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World! from auth server");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
