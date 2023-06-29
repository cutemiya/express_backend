export const PORT = process.env.PORT || 3000;

export const databasePath = './database.db';

export const swaggerDefinition = {
    openapi: '2.0',
    info: {
        title: 'Express API for TodoList',
        version: '1.0.0',
    },
};