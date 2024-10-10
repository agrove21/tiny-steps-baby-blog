const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("signin", {title: "Tiny Steps", description: "Embrace and preserve every special moment of your baby's journey.", layout: "main"});
});


module.exports = router;