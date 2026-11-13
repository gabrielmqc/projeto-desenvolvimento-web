//  Imports (CommonJS)
const Database = require("better-sqlite3"); // driver SQLite
const fs = require("node:fs");              // criar pasta / ler arquivos
const path = require("node:path");          // montar caminhos portáveis

//  Caminhos
const currentDirectory = __dirname;                              // pasta deste arquivo
const rootDirectory = path.resolve(currentDirectory, "../..");   // raiz do backend
const databaseDirectory = path.join(rootDirectory, "database");  // .../backend/database

//  Garante a pasta do banco
// recursive: cria toda a cadeia e NÃO falha se já existir
fs.mkdirSync(databaseDirectory, { recursive: true });

// .../backend/database/database.sqlite
const databasePath = path.join(databaseDirectory, "database.sqlite");

//  Conexão
// Abre (ou cria) o arquivo .sqlite. Conexão síncrona e persistente.
const db = new Database(databasePath);

// SQLite desliga FKs por padrão — precisamos ligar para valerem.
db.pragma("foreign_keys = ON");

//  Schema
// Lê o schema.sql (mesma pasta deste arquivo) como texto UTF-8.
const schema = fs.readFileSync(
    path.join(currentDirectory, "schema.sql"),
    "utf-8"
);

// Executa todos os statements do schema de uma vez.
// Idempotente se o schema usar "CREATE TABLE IF NOT EXISTS".
db.exec(schema);

//  Export
// Singleton: o Node cacheia este módulo, então todos os requires
// recebem a MESMA conexão `db`.
module.exports = { db };