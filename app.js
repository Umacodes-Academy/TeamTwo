const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url = "mongodb://127.0.0.1:27017";
MongoClient.connect(
    url, 
    {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    (err, client) => {
        if(err) throw err;
        const db = client.db('url_shortener');
        console.log(`MongoDB connected: ${url}`);
})


const app = express();

app.get('/url/get', (req, res) => {
    const list = ["hello", "world", "Chris", "your", "mom"];
    res.send(list);
})

app.post('/url/create/:input_url', (req, res) => {
    
})

app.put('/api/student/:id1/:id2', (req, res) => {
    const params = req.params;
    res.send(params)
})

app.delete('/api/:id', (req, res) => {

})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));