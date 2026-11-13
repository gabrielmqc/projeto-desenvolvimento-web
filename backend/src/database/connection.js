const Database = require("better-sqlite3");
const fs = require("node:fs");
const path = require("node:path");

const currentDirectory = __dirname;
const rootDirectory = path.resolve(currentDirectory, "../..");
const databaseDirectory = path.join(rootDirectory, "database");

fs.mkdirSync(databaseDirectory, { recursive: true });

const databasePath = path.join(databaseDirectory, "database.sqlite");

const db = new Database(databasePath);
db.pragma("foreign_keys = ON");

const schema = fs.readFileSync(
    path.join(currentDirectory, "schema.sql"),
    "utf-8"
);
db.exec(schema);

module.exports = { db };