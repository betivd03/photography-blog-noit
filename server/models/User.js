const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants.js');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        validate: /[a-zA-Z0-9]+/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: /[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+/
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        validate: /[a-zA-Z0-9]+/
    }, 
    photos: {
        type: mongoose.Types.ObjectId,
        ref: 'Photo'
    }
});

userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;

            return next();
        })
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;