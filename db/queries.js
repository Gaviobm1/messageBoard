const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const addMessage = async (username, text) => {
  await pool.query("INSERT INTO messages (username, text) VALUES($1, $2)", [
    username,
    text,
  ]);
};

const searchMessage = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows[0];
};

module.exports = {
  getAllMessages,
  addMessage,
  searchMessage,
};
