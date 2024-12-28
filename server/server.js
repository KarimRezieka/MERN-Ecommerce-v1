import express from "express";
import dotenv from "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
mongoose
  .connect(process.env.db_connection)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
