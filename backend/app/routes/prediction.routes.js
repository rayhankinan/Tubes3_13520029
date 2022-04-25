// SETUP LIBRARY
const express = require("express")

// SETUP FILE
const predictions = require("../controllers/prediction.controller.js")

module.exports = (app) => {
    const router = express.Router()

    router.post("/", predictions.create)
    router.get("/:Id", predictions.findOne)
    router.get("/", predictions.findAll)
    router.put("/:Id", predictions.update)
    router.delete("/:Id", predictions.delete)
    router.delete("/", predictions.deleteAll)

    app.use("/api/predictions", router)
}