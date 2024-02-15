const express = require('express');
const router = express.Router();
const _ = require("lodash")
const {urlSchema, validateUrl, Url} = require('../models/urls');

// list out all the urls
router.get('/url/list', async (req, res) => {
    try{
        const db = client.db("url_shortener");
        const collection = db.collection("urls");
        const data = await collection.find().toArray();    
        res.send(data);
    }
    catch(err){
        res.status(500).send("Error getting documents");
        console.log(err.stack);
    }
})

// create new url, possible shorten url logic
router.post('/create/', async (req, res) => {
    try{
        let {originalUrl} = req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: `Missing required fields ${originalUrl}` });
        }
        
        const { error } = validateUrl({ originalUrl });
        if (error) return res.status(400).send(`${error.message} ${originalUrl}` );

        const newUrl = new Url({
            originalUrl: originalUrl
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