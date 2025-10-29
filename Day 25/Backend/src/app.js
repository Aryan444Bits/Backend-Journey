const express = require('express');
const productRoutes = require('./routes/product.routes');
const cors = require('cors');
const paymentRoutes = require('./routes/payment.routes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/products', productRoutes);


module.exports = app;