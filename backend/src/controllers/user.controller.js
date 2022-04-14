// SETUP LIBRARY
const Sequelize = require("sequelize")

// SETUP FILE
const db = require("../models")
const User = db.users

// FUNCTION
exports.create = (req, res) => {
    const { Name, DNASequence } = req.body

    if (Name && DNASequence) {
        const user = {
            Name: Name,
            DNASequence: DNASequence
        }

        User.create(user)
        .then((data) => {
            res.status(201).send({
                message: "Created"
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || "Internal Server Error"
            })
        })

    } else {
        res.status(400).send({
            message: "Bad Request"
        })
    }
}

exports.findOne = (req, res) => {
    const { Name } = req.params

    User.findByPk(Name)
    .then((data) => {
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).send({
                message: "Not Found"
            })
        }
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    })
}

exports.findAll = (req, res) => {
    const { Name } = req.query
    const condition = Name ? { Name: { [Sequelize.Op.like]: `%${Name}%` }} : null

    User.findAll({ 
        where: condition
    })
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    })
}

exports.update = (req, res) => {
    const { Name } = req.params

    User.update(req.body, {
        where: { Name: Name }
    })
    .then((nums) => {
        if (nums) {
            res.status(200).send({
                message: "OK"
            })
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
        }
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    })
}

exports.delete = (req, res) => {
    const { Name } = req.params

    User.destroy({
        where: { Name: Name }
    })
    .then((nums) => {
        if (nums) {
            res.status(200).send({
                message: "OK"
            })
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
        }
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    })
}

exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
    .then((nums) => {
        res.status(200).send({
            message: "OK"
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    })
}