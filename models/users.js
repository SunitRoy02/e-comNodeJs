const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: String,
    email: String,
    mobile: Number,
    password: String,
    fcmToken: String,
    createdAt : String,
    updatedAt : String,
    avatar:String,
    postCode: Number,

});

module.exports = mongoose.model('users', userSchema);