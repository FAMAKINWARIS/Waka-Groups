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


exports.updateInventory = async (req, res) => {
  const productId = req.params.id;
  const { item_name, item_description, item_category, item_amount } = req.body;

  try {
    const query = 'UPDATE inventory SET item_name = $1, item_description = $2, item_category = $3, item_amount = $4 WHERE id = $5';

    // Execute the query with the parameters
    await pool.query(query, [item_name, item_description, item_category, item_amount, productId]);

    // Release the inventory back to the pool
    pool.release();

    res.status(200).json({
     message: 'Product updated successfully', updateInventory
    });
  } catch (err) {
    res.status(500).json({
      message:'Error updating product',
      error: error.message
    });
  }
};

createInventory();

