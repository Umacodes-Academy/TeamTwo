const express = require("express")
const createUrl = require("../routes/createUrl")

module.exports = function (app) {
    app.use("/url", createUrl);
}