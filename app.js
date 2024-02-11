const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const bodyParser = require('body-parser');

require('dotenv').config();

let url = process.env.DB_CONNECTION_DEV;
const app = express();
const client = new MongoClient(url);

app.use(bodyParser.urlencoded({
    extended: false
 }));

// app.get('/url/lists', (req, res) => {

// })

app.post('/url/create/:input_url', async (req, res) => {
    try{
        
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db("url_shortener");

        const collection = db.collection("urls");

        const doc = {
            url: req.params.input_url
        }
        const result = await collection.insertOne(doc);
        
        console.log("Inserted document intor the collection", result);
        res.status(200).send("Document inserted");
        
    } catch(err) {
        console.log(err.stack);
    }
     finally {
        await client.close();
        res.end();
    }
})

app.put('/url/update/:url/:new_url', (req, res) => {
    const params = req.params;
    res.send(params)
})

app.delete('/url/remove/:url', (req, res) => {

})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));