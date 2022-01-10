const express = require("express");
const router = express.Router();

const User = require("./models/user");

router.get("/api/user", async function handler(req, res) {
  try {
    const page = req.query.page ?? 0;
    const userId = req.query.userId;

    if (userId) {
      const user = await User.find({ user_id: userId });
      res.json(user);
    }

    const users = await User.find()
      .skip(page * 5)
      .limit(5);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
