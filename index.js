import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import {} from "dotenv/config";

import WorkExperiances from "./routes/WorkExperiances.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.use("/experiances", WorkExperiances);
app.use("/", (req, res) => {
  res.send("Welcome To My Test Server");
});

const CONNECTION_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
