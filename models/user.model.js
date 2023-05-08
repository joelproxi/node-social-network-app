const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate: [isEmail],
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLength: 6,
      trim: true,
    },
    bio: {
      type: String,
      max: 1024,
    },
    following: {
      type: [String],
    },
    like: {
      type: [String],
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret._v;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
