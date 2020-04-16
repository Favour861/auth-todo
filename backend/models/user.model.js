const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    username: {type: String},
    password: {type: String}
})

module.exports = mongoose.model('User', UserSchema);