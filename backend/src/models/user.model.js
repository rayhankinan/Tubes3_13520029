// SETUP LIBRARY
const Sequelize = require("sequelize")

module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        Name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DNASequence: {
            type: Sequelize.TEXT("long"),
            allowNull: false
        }
    })
    return User
}