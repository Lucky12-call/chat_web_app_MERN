import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import  {app, server } from "./lib/socket.js";

// default middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => res.send(<h1>Chat app API Working</h1>))
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);

connectDB();

server.listen(PORT, () => console.log(`server is running on: ${PORT}`));
