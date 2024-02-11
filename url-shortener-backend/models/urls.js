const mongoose = require('mongoose')
const Joi = require('joi')

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 5000,
        trim: true
    },    
    shortenedUrl: {
        type: String,
        // required: true,
        minlength: 1,
        maxlength: 1024,
        trim: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const Url = mongoose.model("Url", urlSchema);

function validateUrl(url) {
    const schema = Joi.object({
      originalUrl: Joi.string().uri().required().min(5).max(5000),
    });
  
    return schema.validate(url);
}

module.exports.Url = Url;
module.exports.urlSchema = urlSchema;
module.exports.validateUrl = validateUrl;