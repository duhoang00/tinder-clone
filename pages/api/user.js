const express = require("express");
const router = express.Router();

const User = require("./models/user");

router.get("/api/user", async function handler(req, res) {
  try {
    const page = req.query.page ?? 0;

    // get all users
    const users = await User.find()
      .skip(page * 3)
      .limit(3);
    res.json(users);

    // get one user detail
    const userId = req.query.userId;
    if (userId) {
      const user = await User.find({ user_id: userId });
      res.json(user);
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
