export function newTodoService(repo) {

    async function getAllTodo() {
        return await repo.getAllTodo();
    }

    async function insertTodo(data) {
        return await repo.insertTodo(data);
    }

    return {
        repo,
        getAllTodo,
        insertTodo
    };
}

