const jwt = require('../utils/jwt.js');
const User = require('../models/User.js');
const { JWT_SECRET } = require('../constants.js');

exports.register = async (userData) => {
    await User.create(userData);
};

exports.login = async (email, password) => {
    let user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    let isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    let payload = { 
        _id: user._id, 
        username: user.username, 
        email: user.email
    };

    let token = await jwt.sign(payload, JWT_SECRET);

    return token;
};

exports.getAll = () => User.find();

exports.getOne = async (email) => await User.findOne({ email });