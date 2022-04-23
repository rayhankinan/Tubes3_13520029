// SETUP LIBRARY
const Sequelize = require("sequelize")

// SETUP FILE
const db = require("../models")
const Prediction = db.predictions

// FUNCTION
exports.create = (req, res) => {
    const { UserName, DiseaseName } = req.body

    if (UserName && DiseaseName) {
        const prediction = {
            UserName: UserName,
            DiseaseName: DiseaseName,
            Similarity: 0, // UBAH INI DENGAN ALGORITMA
            PredictionStatus: false // UBAH INI DENGAN ALGORITMA
        }

        Prediction.create(prediction)
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
    const { UserName, DiseaseName } = req.params

    Prediction.findOne({
        where: {
            UserName: UserName,
            DiseaseName: DiseaseName
        }
    })
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
    /* MENUNGGU ALGORITMA REGEX */
}

exports.update = (req, res) => {
    
}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}