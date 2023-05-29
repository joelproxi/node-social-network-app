const mongoose = require("mongoose");

const dataBaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost:27017/nodeSocialNetwork";

module.exports = async function () {
  try {
    await mongoose.connect(dataBaseUrl, { useNewUrlParser: true });
    console.log(" Database successfully connected");
  } catch (error) {
    console.error("Database connexion failed", error.message);
    throw new Error(error);
  }
};
