// SETUP LIBRARY
const express = require("express")

// SETUP FILE
const diseases = require("../controllers/disease.controller.js")

module.exports = (app) => {
    const router = express.Router()

    router.post("/", diseases.create)
    router.get("/:Name", diseases.findOne)
    router.get("/", diseases.findAll)
    router.put("/:Name", diseases.update)
    router.delete("/:Name", diseases.delete)
    router.delete("/", diseases.deleteAll)

    app.use("/api/diseases", router)
}