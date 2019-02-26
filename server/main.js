const express  = require('express') ;
const app      = express();
const server   = require('http').Server(app);
const io       = require('socket.io')(server);
const mongoose = require('mongoose');

const {DB, PORT} = require('./config');
const userController = require('./controllers/controller.user');


// middlewares
app.use(express.static('public'));
app.use('/js',express.static('node_modules/vue/dist'));
app.use('/js',express.static('node_modules/vue-router/dist'));

//rutas
app.get('/',(req,res)=>{  res.status(200).send('index'); });

mongoose.connect(DB,{ useNewUrlParser: true })
.then(res=>{
    server.listen(PORT,()=>{
        console.log(`server OK puerto: ${PORT}`);
    });

    //SOCKET IO
    io.on('connection',(socket)=>{
        console.log('id usuario',socket.id);    //socket conectado
        socket.on('disconnect',()=>{
            console.log('usuario desconectado:',socket.id);
        });
    
        socket.on('iniciar',(data)=>{
            userController.signIn(data.user,data.pass,socket.id)
            .then(resultado => socket.emit('iniciado',resultado))
            .catch(err => socket.emit('Error',err));   
        });

        socket.on('registrar',data=>{
            const resultado = userController.signUp(data.user,data.pass,socket.id);
            if(resultado=='Error al crear el usuario') socket.emit('Error','Error al crear el usuario');

            socket.emit('iniciado',resultado);
        });
    });


})
.catch(error=>console.log('Error de conexion con mongoDB', error));




