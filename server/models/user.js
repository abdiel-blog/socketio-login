const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const user = schema({
    nombre  : String,
    password: {type  : String,  select: false},
    socketsID: [String],
    contactos:[schema.Types.ObjectId]   //array de ID DE CONTACTOS
});

module.exports = mongoose.model('User',user);