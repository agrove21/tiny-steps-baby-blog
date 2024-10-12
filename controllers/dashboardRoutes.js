const router = require("express").Router();
const { Image } = require("../model");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("Welcome", {
    title: "Welcome",
    description: "Celebrate and capture every step of your baby's journey, from milestones to cherished moments. Share these precious memories with loved ones and document the unforgettable early years of your little one’s life.",
  });
});

router.get("/blog", async (req, res) => {
  res.render("blog", {
    title: "Tiny Tales",
    description: "Welcome to your little one's diary, a place to capture and cherish every precious memory.",
    layout: "dashboard",
  });
});

router.get("/first", async (req, res) => {
  res.render("first", { 
    title: "Firsts and Milestones",
    description: "From the first smile to the first steps, capture and track your little one's milestones here.",
    layout: "dashboard" });
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
      description: "Each snapshot captures the joy and love of your little one's journey, from special moments to everyday adventures.",
      layout: "dashboard",
      images,
    });
  }
  catch (err) {
    res.render("gallery", {
      title: "Snapshot Memories",
      description: "Each snapshot captures the joy and love of your little one's journey, from special moments to everyday adventures.",
      layout: "dashboard",
      images: [],
      error: "Failed to load images",
    });
  }
});

router.get("/advice", async (req, res) => {
  res.render("advice", {
    title: "Parenting Insights",
    description: "Get helpful tips and expert advice to guide you through your parenting journey.",
    layout: "dashboard",
  });
});

module.exports = router;
