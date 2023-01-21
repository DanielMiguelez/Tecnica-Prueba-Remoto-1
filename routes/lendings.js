const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middlewares/authentication");

const LendingController = require("../controllers/LendingController");

router.post(
  "/createLending",
  authentication,
  isAdmin,
  LendingController.createLending
);
router.get("/getLendings", LendingController.getLendings);
router.put(
  "/updateLendingById/:id",
  authentication,
  isAdmin,
  LendingController.updateLendingById
);
router.delete(
  "/deleteLending/:id",
  authentication,
  isAdmin,
  LendingController.deleteLending
);

module.exports = router;
