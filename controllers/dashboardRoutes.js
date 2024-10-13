const router = require("express").Router();
const { Image } = require("../model");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("Welcome", {
    title: "Welcome to Tiny Steps",
    description:
      "Start by entering your baby's name and birthday. Use the side navigation to begin documenting your baby's tiny steps!",
    layout: "dashboard",
  });
});

router.get("/welcome", async (req, res) => {
  res.render("Welcome", {
    title: "Welcome Back",
    description:
      "Use the side navigation to document your baby's tiny steps!",
    layout: "dashboard",
  });
});

router.get("/blog", async (req, res) => {
  res.render("blog", {
    title: "Tiny Tales",
    description:
      "Add an entry to capture and cherish every precious memory. ",
    layout: "dashboard",
  });
});

router.get("/first", async (req, res) => {
  res.render("first", {
    title: "Firsts and Milestones",
    description:
      "Record the date of your little one's firsts and milestones.",
    layout: "dashboard",
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
    });
  } catch (err) {
    res.render("gallery", {
      title: "Snapshot Memories",
      description:
        "Upload your favorite photos to create a gallery of memories.",
      layout: "dashboard",
      images: [],
      error: "Failed to load images",
    });
  }
});

router.get("/advice", async (req, res) => {
  res.render("advice", {
    title: "Parenting Insights",
    description:
      "Select each logo to discover helpful insight and tips.",
    layout: "dashboard",
  });
});

module.exports = router;
