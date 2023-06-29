import {getAllTodoSql, insertTodoSql} from "./query.js";

export async function newRepo(database) {

    async function getAllTodo() {
        return await database.all(getAllTodoSql)
    }

    async function insertTodo(data) {
        try {
            await database.run(insertTodoSql, data)
        } catch (e) {
            return e.message;
        }
    }

    return {
        db: database,
        getAllTodo,
        insertTodo
    }
}