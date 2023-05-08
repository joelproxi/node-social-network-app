const router = require("express").Router();
const authContrller = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Auth
router.post("/register", authContrller.signUp);

//User
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

module.exports = router;
