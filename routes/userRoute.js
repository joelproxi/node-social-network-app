const { signUp } = require("../controllers/authController");
const {
  getAllUsers,
  getUserInfo,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");

const router = require("express").Router();

// Auth routes
router.post("/register", signUp);

// User routes
router.get("/", getAllUsers);
router.get("/:id", getUserInfo);
router.put("/:id", updateUserProfile);
router.delete("/:id", deleteUserProfile);

module.exports = router;
