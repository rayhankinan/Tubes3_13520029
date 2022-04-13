// SETUP LIBRARY
const Sequelize = require("sequelize")

module.exports = (sequelize) => {
    const Disease = sequelize.define("Disease", {
        Name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DNASequence: {
            type: Sequelize.TEXT("long"),
            allowNull: false
        }
    })
    return Disease
}