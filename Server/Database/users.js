const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    },
    image: String
    },{
        timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = {User};