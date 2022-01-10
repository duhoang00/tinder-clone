import mongoose from "mongoose";

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

module.exports = connectToDb;
