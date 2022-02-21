const router = require('express').Router();

const authController = require('./controllers/authController.js');
const photosController = require('./controllers/photosController.js');

router.use('/users', authController);
router.use('/photos', photosController);
// router.use('*', () => {
//     throw new Error('404 Page Not Found!');
// });

module.exports = router;