// SETUP LIBRARY
const Sequelize = require("sequelize")

module.exports = (sequelize) => {
    const Disease = sequelize.define("Disease", {
        Id : {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        DNASequence: {
            type: Sequelize.TEXT("long"),
            allowNull: false
        }
    })
    return Disease
}