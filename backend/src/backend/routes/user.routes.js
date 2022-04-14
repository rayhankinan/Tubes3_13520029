// SETUP LIBRARY
const express = require("express")

// SETUP FILE
const users = require("../controllers/user.controller.js")

module.exports = (app) => {
    const router = express.Router()

    router.post("/", users.create)
    router.get("/:id", users.findOne)
    router.get("/", users.findAll)
    router.put("/:id", users.update)
    router.delete("/:id", users.delete)
    router.delete("/", users.deleteAll)

    app.use("/api/users", router)
}