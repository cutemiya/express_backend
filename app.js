import {openDatabase, upMigration} from "./database/migration.js";
import {newRepo} from "./database/repository/todoRepo.js";
import newServer from "./api/server.js";
import {PORT} from "./config.js";

export async function newApp() {

    const database = await openDatabase()
    await upMigration(database);
    const repo = await newRepo(database);


    function runServer() {
        const server = newServer(PORT);
        server.run()
    }

    return {
        repo,
        runServer
    }
}