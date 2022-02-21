const router = require('express').Router();

const authService = require('../services/authService.js');
const { AUTH_COOKIE_NAME } = require('../constants.js');

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    
    try {
        await authService.register({ username, email, password });
        let { _id } = await authService.getOne(email);
        let token = await authService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token);
        res.json({ _id, email, username, token });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        let { _id, username } = await authService.getOne(email);
        let token = await authService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token);
        res.json({ _id, email, username, token });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/all', async (req, res) => {
    let users = await authService.getAll();
    console.log(users);
    res.end();
});

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.end();
});

module.exports = router;