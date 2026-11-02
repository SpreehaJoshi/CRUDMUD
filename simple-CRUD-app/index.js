require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from node API :)");
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to db");
})
.catch(() => {
    console.log("error in connecting");
});

app.listen(3000, () => {
    console.log("server running on 3000");
});


//46:14 fcc