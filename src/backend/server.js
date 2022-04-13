// SETUP ENVIRONMENT VARIABLE
require("dotenv").config()

// SETUP LIBRARY
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

// SETUP DATABASE
const db = require("./models")

// SETUP VARIABLE
const PORT = process.env.BACKEND_PORT || 3000

// SETUP APPLICATION
const app = express()

app.use(cors({
    origin: `http://localhost:${PORT}` // UBAH INI DENGAN REACT APP
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

// SYNC DATABASE
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.")
})

// PUT BACKEND ON PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})