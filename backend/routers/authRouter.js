const router = require("express").Router();
const { User, BloodBank } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register

router.post("/:handle", async (req, res) => {
  try {
    // validation
    const handle = req.params.handle;
    const { email, password } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({
        errorMessage: "Email is required.",
      });
    }

    // Check if email is already registered
    const existingUser =
      handle === "bank"
        ? await BloodBank.findOne({ email })
        : await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });
    }

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    req.body.password = passwordHash;

    // save a new user account to the db
    const newUser =
      handle === "bank" ? new BloodBank(req.body) : new User(req.body);
    const savedUser = await newUser.save();

    // sign the token
    const token = jwt.sign(
      { user: savedUser._id, type: handle },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in

router.post("/login/:handle", async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    const handle = req.params.handle;

    // Check if phone or email is provided
    if (!(phone || email)) {
      return res.status(400).json({
        errorMessage: "Phone number or email is required.",
      });
    }

    // Find the user by phone or email based on the handle
    let existingUser;
    if (handle === "bank") {
      existingUser = await BloodBank.findOne({ $or: [{ phone }, { email }] });
    } else {
      existingUser = await User.findOne({ $or: [{ phone }, { email }] });
    }

    // If user not found, return error
    if (!existingUser) {
      return res.status(401).json({
        errorMessage: "Wrong username or password.",
      });
    }

    // Compare password
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // If password is incorrect, return error
    if (!passwordCorrect) {
      return res.status(401).json({
        errorMessage: "Wrong username or password.",
      });
    }

    // sign the token
    const token = jwt.sign(
      {
        user: existingUser._id,
        type: handle,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send();
  console.log("Logged Out");
});

router.get("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.json({ auth: false });
    }

    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the token is valid and not expired
    if (!verified) {
      return res.json({ auth: false });
    }

    // Find the user based on the token type (user or bank)
    const user = await (verified.type == "bank" ? BloodBank : User).findOne(
      { _id: verified.user },
      { password: 0, donations: 0, requests: 0, stock: 0, __v: 0 }
    );

    // If user is found, send authentication status and user details
    if (user) {
      console.log("logged in");
      return res.send({ auth: true, user: user });
    } else {
      // If user is not found, send authentication status as false
      return res.json({ auth: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
