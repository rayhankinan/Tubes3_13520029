// SETUP LIBRARY
const Sequelize = require("sequelize")

// SETUP FILE
const dbConfig = require("../config/db.config.js")
const disease = require("./disease.model.js")
const user = require("./user.model.js")
const prediction = require("./prediction.model.js")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}
db.sequelize = sequelize
db.user = user(sequelize)
db.disease = disease(sequelize)
db.prediction = prediction(sequelize)

db.user.belongsToMany(db.disease, {
    through: db.prediction,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

db.disease.belongsToMany(db.user, {
    through: db.prediction,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = db