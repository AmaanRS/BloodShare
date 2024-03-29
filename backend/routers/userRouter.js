const router = require("express").Router();
const auth = require("../middleware/auth");
const { User, Donations, Requests, BloodBank } = require("../models/models");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.find({ _id: req.user });

    res.json(user);
  } catch (err) {
    res.status(500).send();
  }
});

router.post("/donate", auth, async (req, res) => {
  try {
    // Set the user ID to the authenticated user
    req.body.userId = req.user;

    // Generate the current date and time
    const date = new Date();
    req.body.date = date.toLocaleTimeString() + " " + date.toLocaleDateString();

    // Create a new donation document
    const newDonation = new Donations(req.body);

    // Save the new donation
    const savedDonation = await newDonation.save();

    // Update the blood bank's donations array to include the new donation ID
    await BloodBank.updateOne(
      { _id: req.body.bankId },
      { $push: { donations: savedDonation._id } }
    );

    res.send("Donation completed successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/request", auth, async (req, res) => {
  try {
    // Set the user ID to the authenticated user
    req.body.userId = req.user;

    // Generate the current date and time
    const date = new Date();
    req.body.date = date.toLocaleTimeString() + " " + date.toLocaleDateString();

    // Create a new request document
    const newRequest = new Requests(req.body);

    // Save the new request
    const savedRequest = await newRequest.save();

    // Update the blood bank's requests array to include the new request ID
    await BloodBank.updateOne(
      { _id: req.body.bankId },
      { $push: { requests: savedRequest._id } }
    );

    res.send("Request completed successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/donations", auth, async (req, res) => {
  try {
    // Find donations made by the authenticated user and populate the blood bank details
    const data = await Donations.find({ userId: req.user }).populate(
      "bankId",
      "-_id -__v -password -requests -donations -stock"
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/requests", auth, async (req, res) => {
  try {
    const data = await Requests.find({ userId: req.user }).populate(
      "bankId",
      "-_id -__v -password -requests -donations -stock"
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/", auth, async (req, res) => {
  try {
    console.log(req.user);
    User.updateOne({ _id: req.user }, req.body, (err, user) => {
      if (err) {
        res.send(404, "User not found");
      } else {
        res.send(200, "User updated");
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
