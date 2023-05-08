const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.getUser = (req, res) => {
  console.log(req.params);
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("ID Unknown : " + req.params.id);
  }
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      return res.send(docs);
    } else {
      console.log("ID Unknown : " + err);
    }
  }).select("-password");
};
