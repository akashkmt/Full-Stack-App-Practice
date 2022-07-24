const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/assignments`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};