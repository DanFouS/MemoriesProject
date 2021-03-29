// import express from "express";
const express = require("express");
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postRoutes from "./routes/posts";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://memory:memory123123@cluster0.j609g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 4070;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port:${PORT}`))
  )
  .catch((error) => console.error(error.message));

mongoose.set("useFindAndModify", false);
