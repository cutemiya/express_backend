import {PORT} from "./config.js";
import newServer from './api/server.js'

const server = newServer(PORT);

server.run()