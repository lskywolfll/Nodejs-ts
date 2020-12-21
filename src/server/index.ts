import express from 'express';
import path from 'path';
import index from '../router'

export default class Server{

    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    static init (port:number){
        return new Server(port);
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');

        this.app.use(express.static(publicPath));
    }

    private routes(){
        this.app.use(index);
    }

    start(callback: () => void){
        this.app.listen(this.port, callback);
        this.routes();
        this.publicFolder();
    }
}