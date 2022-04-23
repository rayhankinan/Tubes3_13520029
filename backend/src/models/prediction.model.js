// SETUP LIBRARY
const Sequelize = require("sequelize")

module.exports = (sequelize) => {
    const Prediction = sequelize.define("Prediction", {
        Id : {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        User: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Disease: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
                model: "Diseases",
                key: "Name"
            }
        },
        PredictionDate: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        Similarity: {
            type: Sequelize.DECIMAL(5, 4),
            allowNull: false,
            validate: {
                max: 1,
                min: 0
            }
        },
        PredictionStatus: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    })
    return Prediction
}