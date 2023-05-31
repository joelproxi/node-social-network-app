const { isValidObjectId } = require("mongoose");
const ObjectID = require("mongoose").Types.ObjectId;

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
    const user = await userModel.findById(data.params.id).select("-password");
    return user.toObject();
  } catch (error) {
    console.error("Unknown id: " + data.params.id);
    throw new Error(error);
  }
};

module.exports.updateUserProfile = async (data) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: data.params.id },
      {
        $set: { bio: data.body.bio },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return user.toObject();
  } catch (error) {
    console.error("Unknown id: " + data.params.id);
    throw new Error(error);
  }
};

module.exports.deleteUserProfile = async (data) => {
  if (!ObjectID.isValid(data.params.id)) {
    return { "Unkown user profile id: ": + data.params.id };
  }

  try {
    const user = await userModel.deleteOne({ _id: data.params.id });
    return user;
  } catch (error) {
    console.error("Unknown id: " + data.params.id);
    throw new Error(error);
  }
};
