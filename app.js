const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

let url = process.env.DB_CONNECTION_DEV
const app = express();
const client = new MongoClient(url)

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

run().catch(console.dir);

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