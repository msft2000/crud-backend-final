const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(StatusCodes.OK).json({ users, count: users.length })
}
const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user })
}
const getUser = async (req, res) => {
    const { id: userId } = req.params
    const user = await User.findOne({ _id: userId })
    if (!user) {
        return res
            .status(StatusCodes.NOT_FOUND)
            .json({ message: `No user with id : ${userId}` })
    }
    res.status(StatusCodes.OK).json({ user })
}
const updateUser = async (req, res) => {
    const { id: userId } = req.params
    try {
        const usuario = await User.findByIdAndUpdate({_id: userId}, req.body, { new: true })
        res.status(StatusCodes.OK).json( usuario )
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: error.message })
    }
}
const deleteUser = async (req, res) => {
    const { id: userId } = req.params
    const user = await User.findByIdAndRemove({_id: userId})
    if(!user){
        return res.status(StatusCodes.NOT_FOUND).json({message: `No user with id : ${userId}`})
    }
    res.status(StatusCodes.OK).json({user})
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}