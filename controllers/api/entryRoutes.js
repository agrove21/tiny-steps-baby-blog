const router = require("express").Router();
const { Entry } = require("../../model");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    if (!req.body.title || !req.body.entry) {
      res.status(400).json({ message: "Please provide a title and entry" });
      return;
    }
    const newEntry = await Entry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
