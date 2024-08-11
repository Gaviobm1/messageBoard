const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.DATABASE_ROLE,
  database: "top_users",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});
