const User = require("../databases/models/userModel");
const bcrypt = require("bcrypt");

module.exports.createUser = async (serviceData) => {
  try {
    const user = await User.findOne(
      { pseudo: serviceData.pseudo } || { email: serviceData.email }
    );
    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(serviceData.password, 12);
    const newUser = new User({
      pseudo: serviceData.pseudo,
      email: serviceData.email,
      password: hashedPassword,
    });

    let res = await newUser.save();
    return res;
  } catch (error) {
    console.error("Enror in usersSrvice");
    throw new Error(error);
  }
};
