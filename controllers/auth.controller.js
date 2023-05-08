const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;
  console.log(req.body);
  //   const salt = await bcrypt.genSalt();
  try {
    // const hasPassword = bcrypt.hash(password, salt);
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (error) {
    res.status(400).send({ error });
  }
};
