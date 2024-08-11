const { Client } = require("pg");
const dotenv = require("dotenv");
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
    connectionString: `postgresql://${process.env.DATABASE_ROLE}:${process.env.DATABASE_PASSWORD}@${process.argv[2]}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
