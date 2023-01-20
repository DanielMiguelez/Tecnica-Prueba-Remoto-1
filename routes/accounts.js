const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middlewares/authentication");

const AccountController = require("../controllers/AccountController");

router.post("/createAccount", AccountController.createAccount);
router.get("/getAccounts", authentication, AccountController.getAccounts);
router.delete(
  "/deleteAccount/:id",
  authentication,
  isAdmin,
  AccountController.deleteAccount
);
router.put(
  "/updateAccountById/:id",
  authentication,
  AccountController.updateAccountById
);

module.exports = router;
