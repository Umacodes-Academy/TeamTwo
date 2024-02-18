const express = require('express');
const router = express.Router();
const shortid = require("shortid");
const _ = require("lodash")
const {urlSchema, validateUrl, Url} = require('../models/urls');


// list out the url
router.get('/:id', async (req, res) => {
    try{
        const data = await Url.find({shortenedUrl: req.params.id});
        if(data.length > 0){
            const redirectUrl = data[0].originalUrl;
            res.redirect(redirectUrl);
        }
        res.send("Url not found");
    }
    catch(err){
        res.status(500).send("Error getting documents");
        console.log(err.stack);
    }
})

// create new url, possible shorten url logic
router.post('/create', async (req, res) => {
    try{
        let {originalUrl} = req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: `Missing required fields ${originalUrl}` });
        }
    
        const { error } = validateUrl({ originalUrl });
        if (error) return res.status(400).send(`${error.message} ${originalUrl}` );

        let shortUrl = shortid.generate()

        const newUrl = new Url({
            originalUrl: originalUrl,
            shortenedUrl: shortUrl
        });

        await newUrl.save();
        
        console.log("Inserted document intor the collection", newUrl);
        res.status(200).send("Document inserted");
        
    } catch(err) {
        res.status(500).send("Error creating document");
        console.log(err.stack);
    }
})

module.exports = router;