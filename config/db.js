/** @format */
require('dotenv').config();

const express = require("express");
const { Pool } = require("pg");

const app = express();

// create a connection pool to the PostgreSQL database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// check if the database is connected
pool.connect((err, client, done) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Database connected");
  }
  done();
});

// export the connection pool for use in other files
exports.pool = pool;
