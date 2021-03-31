

const socketController =(socket) => {
    console.log('cliente conectado',socket.id)
    socket.on("disconnect",()=>{
        console.log('Cliente desconectado',socket.id);
    });
   socket.on("enviar-mensaje",(payload,callback)=>{
       //ES PREFERIBLE USAR OBJETOS LITERALES o promitivos, entre menos, es mejor
    //    this.io.emit('enviar-mensaje',payload)

    //CALBACK ES PARA PODER CONFIRMAR QUE ALGO LLEGO Y SE PROCESO,COMO CONFIRMACION PUES
     const id ='ya llego tu mensaje al server';
     callback(id)
    //  this.io.emit('enviar-mensaje',payload)
    //con brodcast le llega el mensaje a todos los cliente excepto quien lo envio
   socket.broadcast.emit('enviar-mensaje',payload)

   });
}

module.exports={
    socketController
}