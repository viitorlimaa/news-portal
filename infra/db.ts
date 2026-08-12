import Database, { type Database as DatabaseType } from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Umzug } from "umzug";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db: DatabaseType = new Database(path.join(__dirname, "../database.db"));
const dbPath = path.join(__dirname, "../database.db");

const umzug = new Umzug({
  migrations: {
    glob: path.join(__dirname, "../migrations/*.sql"),
    resolve: ({ name, path: migrationPath }) => ({
      name,
      up: async () => {
        const sql = fs.readFileSync(migrationPath!, "utf-8");
        db.exec(sql);
      },
      down: async () => {},
    }),
  },
  storage: {
    async executed() {
      db.exec(`CREATE TABLE IF NOT EXISTS migrations (name TEXT PRIMARY KEY)`);
      return db
        .prepare("SELECT name FROM migrations")
        .all()
        .map((r: any) => r.name);
    },
    async logMigration({ name }) {
      db.prepare("INSERT INTO migrations (name) VALUES (?)").run(name);
    },
    async unlogMigration({ name }) {
      db.prepare("DELETE FROM migrations WHERE name = ?").run(name);
    },
  },
  logger: console,
});

await umzug.up();

console.log(`Migrações executadas!`);
export default db;
