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
    mongoose.connect(dbUrl)
        .then(() => console.log(`Connected to mongodb...`))
        .catch(() => console.error(`Could not connect to mongodb`))
}