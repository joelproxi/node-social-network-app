const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 1024,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      maxLength: 500,
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        (ret.id = ret.id), delete ret._id, delete ret.__v, delete ret.password;
        delete ret;
      },
    },
  }
);

module.exports = mongoose.model("UserModel", userSchema);
