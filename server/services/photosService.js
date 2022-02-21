const Photo = require('../models/Photo.js');

exports.create = (photoData) => Photo.create(photoData);

exports.getOne = (photoId) => Photo.findById(photoId).populate('likers').populate('author');

exports.getAll = () => Photo.find().lean();

exports.getLatest = () => Photo.find().sort({createdAt: -1}).limit(3).lean();

exports.getMy = (userId) => Photo.find({author: userId});

exports.addLiker = async (photoId, likerId) => {
    return Photo.findOneAndUpdate(
        {_id: photoId}, 
        { 
            $push: { likers: likerId }
        },
        { runValidators: true }
        );
};

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);

exports.updateOne = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);