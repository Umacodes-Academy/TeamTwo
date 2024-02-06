const mongoose = require('mongoose')
const winston = require("winston")

let dbUrl;
switch (process.env.NODE_ENV) {
    case 'production':
        dbUrl = process.env.DB_CONNECTION_PROD;
        break;
    case 'test':
        dbUrl = process.env.DB_CONNECTION_TEST;
        break;
    default:
        dbUrl = process.env.DB_CONNECTION_DEV;
}

module.exports = function() {
    mongoose.connect("mongodb://localhost/url-shortener")
        .then(() => console.log(`Connected to mongodb... ${dbUrl}`))
        .catch(() => console.error("Could not connect to mongodb"))
}