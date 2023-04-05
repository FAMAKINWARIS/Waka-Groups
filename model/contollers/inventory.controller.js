const { pool } = require("../config/db");

const createInventory = async () => {
  try {
    const item_name = "Table";
    const item_category = "Furniture";
    const item_description = "A dinning Table";
    const item_amount = 2;

    const newInventory = await pool(
      item_name,
      item_description,
      item_category,
      item_amount
    );
    console.log("Added to inventory storage: ", newInventory);
  } catch (error) {
    console.error("Error adding to inventory storage: ", error);
  }
};

createInventory();

