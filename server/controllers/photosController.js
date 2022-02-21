const router = require('express').Router();

const photosService = require('../services/photosService.js');

router.post('/create', async (req, res) => {
    const { title, category, description, location, imageUrl, userId } = req.body;
    let photoData = {title, category, description, location, imageUrl};

    try {
        await photosService.create({...photoData, author: userId});
        res.json({message: 'Successfully added!'});
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/:photoId/details', async (req, res) => {
    const photoId = req.params.photoId;
    const userId = req.body;

    try {
        let details = await photosService.getOne(photoId);
        let photoData = await details.toObject();

        let authorUsername = await details.getAuthor();
        let authorId = await details.getAuthorId();

        let likers = await details.getLikers();
        
        res.json({...photoData, authorUsername, authorId, likers});
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/:photoId/details/likes/:userId', async (req, res) => {
    const photoId = req.params.photoId;
    const userId = req.params.userId;

    try {
        let details = await photosService.getOne(photoId);
        let likersId = await details.getLikersId();
        let isLiked = likersId.some(x => x.toString() === userId);

        res.json(isLiked);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/all', async (req, res) => {
    try {
        let photos = await photosService.getAll();
        res.json(photos);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/latest', async (req, res) => {
    try {
        let latest = await photosService.getLatest();
        res.json(latest);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/my/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        let myPhotos = await photosService.getMy(userId);
        res.json(myPhotos);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/:photoId/like', async (req, res) => {
    const photoId = req.params.photoId;
    const { userId } = req.body;

    try {
        await photosService.addLiker(photoId, userId);
        res.json({message: 'Successfully liked!'});
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.delete('/:photoId/delete', async (req, res) => {
    const photoId = req.params.photoId;

    try {
        await photosService.delete(photoId);
        res.json({message: 'Successfully deleted!'});
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.put('/:photoId/edit', async (req, res) => {
    const photoId = req.params.photoId;
    const photoData = req.body;

    try {
        await photosService.updateOne(photoId, photoData);
        res.json({message: 'Successfully edited!'});
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;