require("dotenv").config();

const fs = require("fs");
const path = require("path");
const pool = require("../src/config/db");

async function runMigrations() {
    const migrationsPath = path.join(__dirname, "../migrations");

    const files = fs.readdirSync(migrationsPath);

    for (const file of files) {
        const sql = fs.readFileSync(
            path.join(migrationsPath, file),
            "utf8"
        );

        console.log(`Running migration: ${file}`);

        await pool.query(sql);
    }

    console.log("All migrations completed");
    process.exit();
}

runMigrations();