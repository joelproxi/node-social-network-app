const {
  getAllUserService,
  getUserProfile,
} = require("../services/userService");

module.exports.getAllUsers = async (req, res, next) => {
  console.log(req.query);
  let response = {};
  try {
    const dataFromSrvice = await getAllUserService();
    response = {
      status: 200,
      message: "Fetching all users...",
      body: dataFromSrvice,
    };
  } catch (error) {
    response = {
      status: 400,
      message: error.message,
      body: error,
    };
  }
  return res.status(response.status).send(response);
};

module.exports.getUserInfo = async (req, res, next) => {
  let response = {};
  console.log(req.params);
  try {
    const userData = await getUserProfile(req.params);
    response = {
      status: 200,
      message: "Fetching user info...",
      body: userData,
    };
  } catch (error) {
    console.error("An error occurred while fetching user info");
    response = {
      status: 400,
      message: error.message,
    };
    throw new Error(error);
  }
  return res.status(response.status).send(response);
};
