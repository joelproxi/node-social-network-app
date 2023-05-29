const { signUp } = require("../controllers/authController");
const { getAllUsers, getUserInfo } = require("../controllers/userController");

const router = require("express").Router();

// Auth routes
router.post("/register", signUp);

// User routes
router.get("/", getAllUsers);
router.get("/:id ", getUserInfo);

module.exports = router;
