const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

let User;
try {
  // Try to get existing model
  User = mongoose.model("User");
} catch (error) {
  // Model doesn't exist, create it
  User = mongoose.model("User", userSchema);
}

module.exports = User;e = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
