const express = require('express')
const cors = require('cors')
const {socketController} =require('../controllers-socket/socket')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //se crea conf
        this.server = require('http').createServer(this.app);
        //creo una propiedad en mi servidor, es como tener dos servers en uno,por asi decirlo
        //informacion de sockets conectados
        this.io = require('socket.io')(this.server);

        this.path = {

        }
        //middlwares es solo algo que se ejecutan antes de llamar a mis apis o peticiones
        this.middlwares();
        //rutas de mi aplicacion
    
        this.routes();
        //sockets 
        this.sockets();
    }




    async conectarDB() {
        await dbConnection();
    }

    middlwares() {
        //CORS HABILITA LLAMADOS 
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
        //file upload 
    }

    routes() {
        // this.app.use(this.path.authPath, require('../routes/auth-route'))


    }

    sockets(){
        this.io.on("connection", socketController);

    }

    listen() {
        //ahora levantamos el server para el wenSocket
        this.server.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }

}


module.exports = Server;