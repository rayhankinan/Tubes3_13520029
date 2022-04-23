// SETUP LIBRARY
const express = require("express")

// SETUP FILE
const predictions = require("../controllers/prediction.controller.js")

module.exports = (app) => {
    const router = express.Router()

    router.post("/", predictions.create)
    router.get("/:UserName/:DiseaseName", predictions.findOne)
    router.get("/", predictions.findAll)
    router.put("/:UserName/:DiseaseName", predictions.update)
    router.delete("/:UserName/:DiseaseName", predictions.delete)
    router.delete("/", predictions.deleteAll)

    app.use("/api/predictions", router)
}