// SETUP LIBRARY
const Sequelize = require("sequelize")

// SETUP FILE
const dbConfig = require("../config/db.config.js")
const disease = require("./disease.model.js")
const prediction = require("./prediction.model.js")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define: {
        timestamps: dbConfig.define.timestamps
    }
})

const db = {}
db.sequelize = sequelize
db.diseases = disease(sequelize)
db.predictions = prediction(sequelize)

db.diseases.hasMany(db.predictions, {
    foreignKey: "Disease",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = db