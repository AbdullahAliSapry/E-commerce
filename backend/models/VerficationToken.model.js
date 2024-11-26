const mongoose = require("mongoose");

const VerificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    verifyToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationSchema
);

module.exports = { VerificationToken };
