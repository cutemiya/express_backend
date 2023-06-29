import {open} from 'sqlite'
import sqlite3 from 'sqlite3'
import {createTodoTableSql, dropTodoTableSql} from "./migrations/001_init.js";
import {databasePath} from "../config.js";
import path from 'path'
import {fileURLToPath} from 'url';

export async function openDatabase() {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)

    return await open({
        filename: path.resolve(__dirname, databasePath),
        driver: sqlite3.Database
    })
}

export async function upMigration(database) {
    await database.exec(createTodoTableSql);
}

export async function downMigration(database) {
    await database.exec(dropTodoTableSql);
}
