const { Router } = require("express");
const {
  createInventory,
  getAllInventory,
} = require("../controllers/inventory.controller");

const router = Router();

router.get("/get", getAllInventory);
router.post("/create", createInventory);

module.exports = router;
