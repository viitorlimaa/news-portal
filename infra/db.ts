import Database, { type Database as DatabaseType } from "better-sqlite3";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db: DatabaseType = new Database(path.join(__dirname, "../database.db"));
const dbPath = path.join(__dirname, "../database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    chapeu TEXT,
    texto TEXT,
    autor TEXT,
    imagem TEXT,
    dataPublicacao TEXT,
    tags TEXT,
    link TEXT,
    ativo INTEGER DEFAULT 1
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    texto TEXT,
    imagem TEXT,
    duracao TEXT,
    url TEXT,
    link TEXT,
    dataPublicacao TEXT,
    tags TEXT,
    ativo INTEGER DEFAULT 1
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS galerias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    texto TEXT,
    imagem TEXT,
    fotos TEXT,
    link TEXT,
    dataPublicacao TEXT,
    tags TEXT,
    ativo INTEGER DEFAULT 1
  )
`);
export default db;
