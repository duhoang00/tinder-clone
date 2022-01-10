const express = require("express");
const bodyParser = require("body-parser");

import connectToDb from "./dbConnect";

const app = express();

const userRouter = require("./user");
const userReactRouter = require("./userreact");

connectToDb();

app.get("/api", (req, res) => {
  res.end();
});

app.use(userRouter);
app.use(userReactRouter);

module.exports = app;
