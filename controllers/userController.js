const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const usersRecord = await User.find();
        res.json(usersRecord);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usersRecord = await User.findById(id);
        res.json(usersRecord);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const params  = { ...req.params, ...req.body };
        const user = await User.findByIdAndUpdate(params.id, params, { new: true });
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};