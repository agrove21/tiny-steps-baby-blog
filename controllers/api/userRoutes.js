const router = require("express").Router();
const { User, Image } = require("../../model");
const bcrypt = require("bcrypt");
const auth = require("../../utils/auth");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

// POST / signup
router.post("/", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      res
        .status(400)
        .json({ message: "Please provide a name, email, and password" });
      return;
    }
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // req.body.password = hashedPassword;
    const userData = await User.create(req.body);
    delete userData.password;
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.name = userData.name;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST / login
router.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res
        .status(400)
        .json({ message: "Please provide a email and password" });
      return;
    }
    console.log("testing user string", req.body)
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    console.log("testing log in", userData)
    if (!userData) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }
    delete userData.password;
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.name = userData.name;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in" });
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Error try again later" });
  }
});

//Post / logout
router.post("/logout", auth, (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});

//Post / save-baby-info
router.post('/save-baby-info', (req, res) => {
  const babyName = req.body.babyName;
  const babyBirthday = dayjs(req.body.babyBirthday).format('MMMM D, YYYY');  // Format birthday

  // Save to session
  req.session.babyName = babyName;
  req.session.babyBirthday = babyBirthday;

  // Redirect back to the welcome page
  res.redirect('/dashboard');
});

// POST / upload
router.post("/upload", auth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "Please provide an image" });
      return;
    }
    const filePath = req.file.path;
    const result = await cloudinary.uploader.upload(filePath);
    const image = await Image.create({
      url: result.secure_url,
      user_id: req.session.user_id,
    });

    fs.unlinkSync(filePath);
    
    res.status(200).json(image);
  } catch (err) {
    res.status(400).json({ message: "Internal Error try again later" });
  }
});






module.exports = router;


