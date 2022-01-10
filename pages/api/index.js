const express = require("express");
const bodyParser = require("body-parser");

import connectToDb from "./dbConnect";

const app = express();

const userRouter = require("./user");
const userReactRouter = require("./userreact");

app.get("/api", (req, res) => {
  connectToDb();
  return null;
});

app.use(userRouter);
app.use(userReactRouter);

module.exports = app;
