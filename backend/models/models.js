const mongoose = require("mongoose");

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const stock = {
  "A+": 0,
  "A-": 0,
  "B+": 0,
  "B-": 0,
  "AB+": 0,
  "AB-": 0,
  "O+": 0,
  "O-": 0,
};

// ------- User Model -------

// Create schema for Users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18 }, // Ensure age is a number and at least 18 years old
  gender: { type: String, required: true, enum: ["male", "female", "other"] }, // Ensure gender is one of the specified values
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  }, // Ensure Blood group is one of the specified values
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  }, // Ensure email is unique and matches the email format
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^\d{10}$/,
  }, // Ensure phone is unique and matches a 10-digit number format
  password: { type: String, required: true, minlength: 8 }, // Ensure password is at least 8 characters long
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String },
});

// Create model for Users
const User = mongoose.model("Users", userSchema);

// ------- Donations Model -------

// Create schema for Donations
const bloodDonations = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  bankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodBanks",
    required: true,
  },
  units: { type: Number, required: true, min: 1 }, // Ensure units is a positive number
  date: { type: Date, required: true, default: Date.now }, // Ensure date is a valid date format and is required
  disease: { type: String, trim: true }, // Trim any leading or trailing spaces in the disease field
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Approved", "Denied", "Donated"], // Ensure status is one of the specified values
    default: "Pending",
  },
});

// Create model for Donors
const Donations = mongoose.model("Donations", bloodDonations);

// ------- Requests Model -------

// Create schema for Patients
const bloodRequests = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  bankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodBanks",
    required: true,
  },
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 1 }, // Ensure age is a positive number
  gender: { type: String, required: true, enum: ["male", "female", "other"] }, // Ensure gender is one of the specified values
  bloodGroup: { type: String, enum: bloodGroups, required: true }, // Ensure bloodGroup is one of the specified values
  units: { type: Number, required: true, min: 1 }, // Ensure units is a positive number
  date: { type: Date, required: true, default: Date.now }, // Ensure date is a valid date format and is required
  reason: { type: String }, // Allow reason to be a string
  status: {
    type: String,
    enum: ["Pending", "Approved", "Denied", "Completed"], // Ensure status is one of the specified values
    default: "Pending",
  },
});

// Create model for Patients
const Requests = mongoose.model("Requests", bloodRequests);

// ------- Blood Bank Model -------

// Create schema for Blood Banks
const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospital: { type: String, required: true },
  contactPerson: { type: String, required: true }, // Ensure contactPerson is required
  category: { type: String, required: true },
  website: { type: String, trim: true }, // Trim any leading or trailing spaces in the website field
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^\d{10}$/,
  }, // Ensure phone is unique and matches a 10-digit number format
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  }, // Ensure email is unique and matches the email format
  password: { type: String, required: true, minlength: 8 }, // Ensure password is at least 8 characters long
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  requests: [
    {
      requestId: { type: mongoose.Schema.Types.ObjectId, ref: "Requests" },
    },
  ],
  donations: [
    {
      donationId: { type: mongoose.Schema.Types.ObjectId, ref: "Donations" },
    },
  ],
  stock: {
    "A+": { type: Number, default: 0 },
    "A-": { type: Number, default: 0 },
    "B+": { type: Number, default: 0 },
    "B-": { type: Number, default: 0 },
    "AB+": { type: Number, default: 0 },
    "AB-": { type: Number, default: 0 },
    "O+": { type: Number, default: 0 },
    "O-": { type: Number, default: 0 },
  },
});
// Create model for Blood Banks
const BloodBank = mongoose.model("BloodBanks", bloodBankSchema);

// Create schema for Camps
const campSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  bankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodBanks",
    required: true,
  }, // Ensure bankId is required
  organizer: { type: String, required: true },
  contact: { type: String, required: true, trim: true, match: /^\d{10}$/ }, // Ensure contact is required and matches a 10-digit number format
  startTime: { type: String, required: true }, // Ensure startTime is required
  endTime: { type: String, required: true }, // Ensure endTime is required
  donors: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Users", unique: true }, // Ensure _id is unique
      units: { type: Number, required: true, min: 0, default: 0 }, // Ensure units is a number and is at least 0
      status: { type: Number, enum: [0, 1], default: 0 }, // Ensure status is either 0 or 1
    },
  ],
});

// Create model for Camps
const Camp = mongoose.model("Camps", campSchema);

// Exports

module.exports = { User, Donations, Requests, BloodBank, Camp };
