const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
import connectToDb from "./dbConnect";

import { v4 } from "uuid";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./user");

connectToDb();

app.get("/api", (req, res) => {
  console.log("api called");
});

app.use(userRouter);

module.exports = app;
