const router = require("express").Router();

router.get("/blog", async (req, res) => {
  res.render("blog", {title: "Tiny Tales", layout: "dashboard"});
});

router.get("/first", async (req, res) => {
    res.render("first", {title: "Firsts and Milestones", layout: "dashboard"});
  });

router.get("/gallery", async (req, res) => {
    res.render("gallery", {title: "Photo Gallery", layout: "dashboard"});
  });


module.exports = router;