const User = require('./../models/user');

module.exports = {
    signIn(user, pass){
       const data = {
        nombre  : user,
        password: pass
        };

        return User.findOne(data)
        .then(registro=>{
            if(registro==null) throw 'Datos no encontrados';    //enviar un error al catch

            return registro;
        });
    },
    signUp(user,pass,socket){
        const usuario = new User({
            nombre:user,
            password:pass,
            socketsID:[socket]
        });

        usuario.save(
            error=>{
                if(error) return `Error al crear el usuario`;
            });
        
        return {
            _id:usuario._id,
            nombre:usuario.nombre
        };
    }
};