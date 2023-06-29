export const createTodoTableSql = `create table if not exists todo (
    id integer primary key,
    title text not null,
    description text not null,
    author text,
    deadline date
);`

export const dropTodoTableSql = `drop table if exists todo;`