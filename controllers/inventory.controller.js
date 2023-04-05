const { createInventoryRecord } = require("../model/model");

const createInventory = async () => {
  try {
    const Name = "Table";
    const Category = "Furniture";
    const Description = "A dinning Table";
    const Amount = 2;

    const newInventory = await createInventoryRecord(
      Name,
      Description,
      Category,
      Amount
    );
    console.log("Added to inventory storage: ", newInventory);
  } catch (error) {
    console.error("Error adding to inventory storage: ", error);
  }
};

createInventory();