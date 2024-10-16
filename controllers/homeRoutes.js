const router = require("express").Router();


router.get("/", async (req, res) => {
  if (req.session.logged_in){
    res.redirect("/dashboard/welcome");
    return
  }

  res.render("signin", {title: "Tiny Steps", description: "Embrace and preserve every special moment of your baby's journey.", layout: "main"});
});


module.exports = router;