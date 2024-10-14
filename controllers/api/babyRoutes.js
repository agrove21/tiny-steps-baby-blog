const router = require("express").Router();
const { Baby } = require("../../model");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    if (!req.body.babyName || !req.body.babyBirthday) {
      res.status(400).json({ message: "Please provide a baby name and birthday" });
      return;
    }
    const newBaby = await Baby.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBaby);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;