import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";

// Import Routes
import PostRoutes from "./routes/post.js";

// App

const app = express();

// Middleware
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(fileUpload({ useTempFiles: true }));
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.use("/api/posts", PostRoutes);

// Listeners
mongoose.connect(
  "mongodb://127.0.0.1:27017/image-upload",
  { useNewUrlParser: true },
  () => console.log("connected to DB")
);

app.listen(3000, () => console.log("App running on port 3000"));
