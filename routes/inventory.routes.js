const { Router } = require("express");
const {
  createInventory,
  getAllInventory,
  deleteInventory,
} = require("../controllers/inventory.controller");

const router = Router();

router.get("/get", getAllInventory);
router.post("/create", createInventory);
router.delete("/delete/:id", deleteInventory);

module.exports = router;
