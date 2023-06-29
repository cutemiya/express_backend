export const getAllTodoSql = `select * from todo;`

export const insertTodoSql = `insert into todo(title, description, author, deadline) values(?, ?, ?, ?);`