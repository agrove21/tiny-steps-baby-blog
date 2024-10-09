const router = require("express").Router();

router.get("/blog", async (req, res) => {
  res.render("blog", {title: "Tiny Tales", layout: "dashboard"});
});

router.get("/blog", async (req, res) => {
    res.render("blog", {title: "Tiny Tales", layout: "dashboard"});
  });


module.exports = router;