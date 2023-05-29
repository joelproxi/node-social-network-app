const userModel = require("../databases/models/userModel");

module.exports.getAllUserService = async () => {
  try {
    const users = await userModel.find().select("-password");
    return users;
  } catch (error) {
    console.error("An error occurred in userService.js");
    throw new Error(error);
  }
};

module.exports.getUserProfile = async (data) => {
  try {
    const user = await userModel.findOne({ _id: data.id });
    return user.toObject();
  } catch (error) {
    console.error("Unknown id: " + data.id);
    throw new Error(error);
  }
};
