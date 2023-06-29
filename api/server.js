import express from "express";
import {newTodoController} from "./controller/todo.js"
import {swaggerDefinition} from "../config.js";
import swaggerJSDoc from 'swagger-jsdoc'
import expressOasGenerator from 'express-oas-generator'

function newServer(port, todoService) {

    const app = express();
    app.use(express.json())

    // controllers
    const todoController = newTodoController(todoService);

    // swagger settings
    const swaggerOptions = {
        swaggerDefinition,
        apis: ['./controller/*.js'],
    };
    const swaggerSpec = swaggerJSDoc(swaggerOptions);
    expressOasGenerator.init(app, swaggerSpec)

    // routes
    app.use('/todo', todoController.controller);

    // run function
    const run = () => {
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server running on port: ${port}`);
        })
    }

    return {
        server: app,
        run,
    }
}

export default newServer;