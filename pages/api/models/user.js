import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: String,
  first_name: String,
  last_name: String,
  date_of_birth: Date,
  liked_profile: Array,
  passed_profile: Array,
});

module.exports = mongoose.models.users || mongoose.model("users", userSchema);
