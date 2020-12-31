import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    date: {
        date: Date,
        // default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);