import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import memoryRouter from "./routers/memoryRouter.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "20mb" }));

app.use("/memories", memoryRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);

  mongoose
    .connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));
});
