const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate: /[a-zA-Z0-9]+/
    },
    category: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate: /[a-zA-Z0-9]+/
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        validate: /[a-zA-Z0-9]+/
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
        validate: /^https?:\/\//i
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true
});

photoSchema.method('getLikers', function () {
    return this.likers.map(x => x.username).join(', ');
});

photoSchema.method('getLikersId', function () {
    return this.likers.map(x => x._id);
});

photoSchema.method('getAuthor', function () {
    return this.author.username;
});

photoSchema.method('getAuthorId', function () {
    return this.author._id;
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;