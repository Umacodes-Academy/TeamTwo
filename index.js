const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    const list = ["hello", "world", "Chris", "your", "mom"];
    res.send(list);
})

app.post('/', (req, res) => {
    
})

app.get('/api/student/:id1/:id2', (req, res) => {
    const params = req.params;
    res.send(params)
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));