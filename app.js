const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Joi = require('joi');

require('dotenv').config();

let url = process.env.DB_CONNECTION_DEV;
const app = express();
const client = new MongoClient(url);

// list out all the urls
app.get('/url/list', async (req, res) => {
    try{
        await client.connect();
        const db = client.db("url_shortener");
        const collection = db.collection("urls");
        const data = await collection.find().toArray();
        
        res.send(data);
    }
    catch(err){
        res.status(500).send("Error getting documents");
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
})

// create new url, possible shorten url logic
app.post('/url/create/', async (req, res) => {
    try{
        const schema = {
            input_url: Joi.string().uri().required().min(5).max(5000),
            shorten_url: Joi.string().uri().required().min(5).max(5000)
        }

        const validate = Joi.validate(req.params, schema);

        if(validate.error()){
            res.status(400).send("Invalid url");
            return;
        }

        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db("url_shortener");

        const collection = db.collection("urls");

        const doc = {
            url: req.params.input_url,
            shorten_url: req.params.shorten_url
        }
        const result = await collection.insertOne(doc);
        
        console.log("Inserted document intor the collection", result);
        res.status(200).send("Document inserted");
        
    } catch(err) {
        res.status(500).send("Error creating document");
        console.log(err.stack);
    }
     finally {
        await client.close();
        res.end();
    }
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));