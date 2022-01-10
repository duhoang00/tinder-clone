const express = require("express");
import mongoose from "mongoose";

import { v4 } from "uuid";

const app = express();
const userRouter = require("./user");

const connectToDb = () => {
  console.log("...connecting to database");
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
      console.log("connecting to db failed");
      console.log(err);
    } else {
      console.log("connecting to db is successful");
    }
  });
};

connectToDb();

app.get("/api", (req, res) => {
  res.send("/");
});

app.use(userRouter);

module.exports = app;
