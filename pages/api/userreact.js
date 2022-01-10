const express = require("express");
const router = express.Router();

const User = require("./models/user");

router.patch("/api/userreact/like", async function handler(req, res) {
  console.log("like");
  try {
    console.log("he");
    const profileId = req.query.profileid;
    if (profileId) {
      const updatedUser = await User.updateOne(
        { user_id: profileId },
        {
          $set: {
            react_type: "liked",
          },
        }
      );
      res.json(updatedUser);
    }
  } catch (error) {
    res.json(console.error());
  }
});

module.exports = router;
