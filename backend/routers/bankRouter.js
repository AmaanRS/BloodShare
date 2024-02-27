const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  User,
  BloodBank,
  Donations,
  Requests,
  Camp,
} = require("../models/models");

router.post("/:handle", auth, async (req, res) => {
  try {
    const handle = req.params.handle;

    // Strong validation for handle parameter
    if (handle !== "bank" && handle !== "user") {
      return res
        .status(400)
        .json({ errorMessage: "Invalid handle parameter." });
    }

    const filter =
      handle === "bank"
        ? {}
        : { password: 0, requests: 0, donations: 0, stock: 0, __v: 0 };

    // Strong validation for request body
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ errorMessage: "Request body is empty." });
    }

    const banks = await BloodBank.find(req.body, filter);
    res.json(banks);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/allBanks/:state/:district", async (req, res) => {
  try {
    const { state, district } = req.params;
    // Strong validation for state and district parameters
    if (!state || !district) {
      return res
        .status(400)
        .json({ errorMessage: "State and district parameters are required." });
    }
    const banks = await BloodBank.find(
      { state, district },
      { password: 0, _id: 0, donations: 0, requests: 0, stock: 0 }
    );
    res.json(banks);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/updateStock", auth, async (req, res) => {
  try {
    const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });

    // Validate if bloodGroup and units are provided
    if (!req.body.bloodGroup || !req.body.units) {
      return res.status(400).send("Blood group and units are required.");
    }

    const updatedStock = prevStock.stock[req.body.bloodGroup] + req.body.units;

    // Update the stock
    await BloodBank.updateOne(
      { _id: req.user },
      { $set: { ["stock." + req.body.bloodGroup]: updatedStock } }
    );

    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/deleteStock", auth, async (req, res) => {
  try {
    const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });

    // Validate if bloodGroup and units are provided
    if (!req.body.bloodGroup || !req.body.units) {
      return res.status(400).send("Blood group and units are required.");
    }

    const currentStock = prevStock.stock[req.body.bloodGroup];

    // Validate if enough stock is available
    if (currentStock < req.body.units) {
      return res.status(404).send("Not enough blood.");
    }

    // Update the stock
    await BloodBank.updateOne(
      { _id: req.user },
      {
        $set: {
          ["stock." + req.body.bloodGroup]: currentStock - req.body.units,
        },
      }
    );

    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/getStock", auth, async (req, res) => {
  try {
    // Find the blood bank using the user ID from the authentication
    const bloodBank = await BloodBank.findOne(
      { _id: req.user },
      { _id: 0, stock: 1 }
    );

    // Check if blood bank exists
    if (!bloodBank) {
      return res.status(404).send("Blood bank not found.");
    }

    res.status(200).json(bloodBank.stock);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.put("/donations", auth, async (req, res) => {
  try {
    const donationId = req.body.id;
    const status = req.body.status;

    // Update the status of the donation
    const updatedDonation = await Donations.updateOne(
      { _id: donationId },
      { status: status }
    );

    // Check if the donation was found and updated
    if (updatedDonation.nModified === 0) {
      return res.status(404).send("Donation not found.");
    }

    res.status(200).send("Status updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/requests", auth, async (req, res) => {
  try {
    const requestId = req.body.id;
    const status = req.body.status;

    // update the status of the request
    const updatedRequest = await Requests.updateOne(
      { _id: requestId },
      { status: status }
    );

    // Check if the request was found and updated
    if (updatedRequest.nModified === 0) {
      return res.status(404).send("Request not found.");
    }

    res.status(200).send("Status updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.get("/donations", auth, async (req, res) => {
  try {
    // Find donations associated with the authenticated blood bank and populate the user details
    const data = await Donations.find({ bankId: req.user }).populate(
      "userId",
      "-__v -password -requests -donations -stock"
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/requests", auth, async (req, res) => {
  try {
    // Find requests associated with the authenticated blood bank and populate the user details
    const data = await Requests.find({ bankId: req.user }).populate(
      "userId",
      "-__v -password -requests -donations -stock"
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/", auth, async (req, res) => {
  try {
    // Update the information of the authenticated blood bank
    const updatedBloodBank = await BloodBank.updateOne(
      { _id: req.user },
      req.body
    );

    // Check if the blood bank was found and updated
    if (updatedBloodBank.nModified === 0) {
      return res.status(404).send("Blood bank not found.");
    }

    res.status(200).send("Blood bank updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
