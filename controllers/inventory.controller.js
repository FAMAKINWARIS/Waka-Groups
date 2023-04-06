const pool = require("../config/db");
exports.createInventory = async (req, res) => {
  try {
    const { item_name, item_description, item_category, item_amount } =
      req.body;

    const newInventory = await pool.query(
      "INSERT INTO inventory_record (item_name, item_category, item_description, item_amount) VALUES ($1, $2, $3, $4) RETURNING *",
      [item_name, item_description, item_category, item_amount]
    );
    return res.status(201).json({
      message: "Inventory created successfully",
      result: newInventory.rows[0],
    });
  } catch (error) {
    console.error("Error adding to inventory storage: ", error);
  }
};

exports.getAllInventory = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM inventory_record");
    return res.status(200).json({ result: result.rows });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.updateInventory = async (req, res) => {
  const productId = req.params.id;
  const { item_name, item_description, item_category, item_amount } = req.body;

  try {
    const query =
      "UPDATE inventory SET item_name = $1, item_description = $2, item_category = $3, item_amount = $4 WHERE id = $5";

    // Execute the query with the parameters
    await pool.query(query, [
      item_name,
      item_description,
      item_category,
      item_amount,
      productId,
    ]);

    // Release the inventory back to the pool
    pool.release();

    res.status(200).json({
      message: "Product updated successfully",
      updateInventory,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating product",
      error: error.message,
    });
  }
};


// delete inventory
exports.deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInventory = await pool.query(
      "DELETE FROM inventory_record WHERE id = $1",
      [id]
    );
    return res.status(200).json({ message: "Inventory deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}
