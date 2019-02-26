const mongoose = require('mongoose');
const schema   = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const messages = schema({
    contenido: String,
    fecha    : {type: Date, default: Date.now()},
    emisor   : ObjectId,
    receptor : ObjectId,
});