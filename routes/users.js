const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middlewares/authentication");

const UserController = require("../controllers/UserController");

router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.post("/createUser", UserController.createUser);
router.get("/getUsers", UserController.getUsers);
router.delete(
  "/deleteUser/:id",
  authentication,
  isAdmin,
  UserController.deleteUser
);
router.put(
  "/updateUserById/:id",
  authentication,
  isAdmin,
  UserController.updateUserById
);
router.get("/confirm/:email", UserController.confirm)
router.get('/recoverPassword/:email',UserController.recoverPassword)

module.exports = router;
