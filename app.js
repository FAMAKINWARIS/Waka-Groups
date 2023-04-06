require("dotenv").config();
const express = require("express");
const router = require("./routes/inventory.routes");

const app = express();
app.use(express.json());

app.use("/api", router);
const port = process.env.PORT;

app.listen(port, () => console.log("Server connected successfully"));
