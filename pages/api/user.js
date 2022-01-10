const express = require("express");
const router = express.Router();

const User = require("./models/user");

router.get("/api/user", async function handler(req, res) {
  const page = req.query.page ?? 0;

  const userId = req.query.userId;
  if (userId) {
    // get one user detail
    try {
      const user = await User.find({ user_id: userId });
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  } else {
    // get all users
    try {
      const users = await User.find()
        .skip(page * 3)
        .limit(3);
      res.json(users);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
});

module.exports = router;
