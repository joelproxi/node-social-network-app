const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.getUser = async (req, res) => {
  console.log(req.params.id);
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("ID Unknown : " + req.params.id);
  }
  try {
    const user = await UserModel.findById({ _id: req.params.id }).select(
      "-password"
    );
    if (user) {
      return res.status(200).json(user);
    } else return res.status(400).send("ID Unknown : " + req.params.id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send("ID Unknown : " + req.params.id);
  }
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (user) {
      return res.status(200).json(user);
    } else return res.status(400).send("User Not Found ");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Unknown id: " + req.params.id });
  }

  try {
    await UserModel.findByIdAndRemove({ _id: req.params.id }).exec();
    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    throw new Error(error.message);
  }
};
