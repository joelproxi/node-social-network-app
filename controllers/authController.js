const userService = require("../services/authService");

module.exports.signUp = async (req, res) => {
  let response = {};
  try {
    const responseService = await userService.createUser(req.body);
    response.status = 201;
    response.message = "User created successfully";
    response.body = responseService;
  } catch (error) {
    console.error(" Something went wront in the userController.js");
    throw new Error(error);
  }
  return res.status(response.status).send(response);
};
