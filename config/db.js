const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nodeSocialNewtwork", {
      useNewUrlParser: true,
    });
    console.log("Conneted to MongoDB");
  } catch (error) {
    console.error("Error to connected to Database ", err);
    throw new Error(error);
  }
};
