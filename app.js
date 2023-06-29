import {openDatabase, upMigration} from "./database/migration.js";
import {newRepo} from "./database/repository/todoRepo.js";
import newServer from "./api/server.js";
import {PORT} from "./config.js";
import {newTodoService} from "./service/todo.js";

export async function newApp() {

    // database settings
    const database = await openDatabase();
    await upMigration(database);
    const repo = await newRepo(database);

    // services
    const todoService = newTodoService(repo);


    function runServer() {
        const server = newServer(PORT, todoService);
        server.run();
    }

    return {
        runServer
    };
}