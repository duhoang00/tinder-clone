const express = require("express");
import mongoose from "mongoose";
const cors = require("cors");
const bodyParser = require("body-parser");

import { v4 } from "uuid";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
