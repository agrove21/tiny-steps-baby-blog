const router = require("express").Router();
const { Image, Entry } = require("../model");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  res.render("Welcome", {
    title: "Welcome to Tiny Steps",
    description:
      "Start by entering your baby's name and birthday. Use the side navigation to begin documenting your baby's tiny steps!",
    layout: "dashboard",
    loggedIn: req.session.logged_in
  });
});

router.get("/welcome", auth, async (req, res) => {
  res.render("Welcome", {
    title: "Welcome Back",
    description:
      "Use the side navigation to document your baby's tiny steps!",
    layout: "dashboard",
    loggedIn: req.session.logged_in
  });
});

router.get("/blog", auth, async (req, res) => {
  try {
    const entriesData = await Entry.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const entries = entriesData.map((entry) => entry.get({ plain: true }));
    console.log("testing entries", entriesData);
    res.render("blog", {
      title: "Tiny Tales",
      description:
        "Add an entry to capture and cherish every precious memory. ",
      layout: "dashboard",
      entries,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.render("blog", {
      title: "Tiny Tales",
      description:
        "Add an entry to capture and cherish every precious memory. ",
      layout: "dashboard",
      entries: [],
      loggedIn: req.session.logged_in,
      error: "Failed to load entries",
    });
  }
});

router.get("/first", auth, async (req, res) => {
  res.render("first", {
    title: "Firsts and Milestones",
    description:
      "Record the date of your little one's firsts and milestones.",
    layout: "dashboard",
    loggedIn: req.session.logged_in
  });
});

router.get("/gallery", auth, async (req, res) => {
  try {
    const imagesData = await Image.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const images = imagesData.map((image) => image.get({ plain: true }));
    console.log("testing images", images);
    res.render("gallery", {
      title: "Snapshot Memories",
      description:
        "Upload your favorite photos to create a gallery of memories.",
      layout: "dashboard",
      images,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.render("gallery", {
      title: "Snapshot Memories",
      description:
        "Upload your favorite photos to create a gallery of memories.",
      layout: "dashboard",
      loggedIn: req.session.logged_in,
      images: [],
      error: "Failed to load images",
    });
  }
});

router.get("/advice", auth, async (req, res) => {
  res.render("advice", {
    title: "Parenting Insights",
    description:
      "Select each logo to discover helpful insight and tips.",
    layout: "dashboard",
    loggedIn: req.session.logged_in
  });
});

module.exports = router;
