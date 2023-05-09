const router = require("express").Router();
const authContrller = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Auth
router.post("/register", authContrller.signUp);

//User
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
