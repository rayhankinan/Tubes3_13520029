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
db.users = user(sequelize)
db.diseases = disease(sequelize)
db.predictions = prediction(sequelize)

db.users.belongsToMany(db.diseases, {
    through: db.predictions,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

db.diseases.belongsToMany(db.users, {
    through: db.predictions,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = db