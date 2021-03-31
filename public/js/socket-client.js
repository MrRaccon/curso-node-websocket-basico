//referencias
const lbOnline=document.querySelector('#lbOnline');
const lbOffline=document.querySelector('#lbOffline');
const txtMensaje=document.querySelector('#txtMensaje');
const btnEnviar=document.querySelector('#btnEnviar');

//socket del cliente
const socket=io();
//on para esuchar
socket.on('connect',()=>{
    lbOffline.style.display='none';
    lbOnline.style.display='';

})


socket.on('disconnect',()=>{
    lbOffline.style.display='';
    lbOnline.style.display='none';
})

socket.on('enviar-mensaje',(payload)=>{
   console.log(payload)
})



btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMensaje.value;
    const payload={
        mensaje,
        id:'1234',
        fecha:new Date().getTime()
    }
    //envia mensaje a server
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('respuesta de que llego:',id)
    });
})