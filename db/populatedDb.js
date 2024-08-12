const { Client } = require("pg");
const dotenv = require("dotenv");
delete process.env.DATABASE_PASSWORD;
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR( 255 ),
  text VARCHAR(500),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES
  ('Bryan', 'Hi there!'),
  ('Odin', 'Hello world'),
  ('Damon', 'Avarice, suffering');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
