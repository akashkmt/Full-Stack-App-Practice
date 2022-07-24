const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: true
    },
    image: String
    },{
        timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = {User};