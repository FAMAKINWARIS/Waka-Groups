const { pool } = require("../config/db");

exports.createInventoryRecord = async (
  name, 
  description,
   category, 
   amount
   ) => {
  try {
    const result = await pool.query(
      "INSERT INTO inventory_record (item_name, item_description, item_category, item_amount) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, category, amount]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating inventory record: ", error);
  }
};