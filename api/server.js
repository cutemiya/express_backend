import express from "express";
import some from "./controller/some.js"

function newServer(port) {

    const app = express()
    app.use('/some', some)

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