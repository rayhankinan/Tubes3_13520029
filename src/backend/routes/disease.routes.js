// SETUP LIBRARY
const express = require("express")

// SETUP FILE
const diseases = require("../controllers/disease.controller.js")

module.exports = (app) => {
    const router = express.Router()

    router.post("/", diseases.create)
    router.get("/:id", diseases.findOne)
    router.get("/", diseases.findAll)
    router.put("/:id", diseases.update)
    router.delete("/:id", diseases.delete)
    router.delete("/", diseases.deleteAll)

    app.use("/api/diseases", router)
}