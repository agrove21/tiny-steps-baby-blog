const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("signin", {title: "Welcome to tiny Steps"});
});


module.exports = router;