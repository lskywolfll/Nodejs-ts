import Server from './server';
import dbConnect from './db/conexion';

const server = Server.init(3000);

server.start(async () => {
    await dbConnect("mongodb://localhost:27017");
    console.log("Server running on: http://localhost:3000");
});