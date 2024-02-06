const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/url-shortener')
    .then(() => console.log("Connected to mongodb..."))
    .catch(() => console.error("Could not connect to mongodb"))