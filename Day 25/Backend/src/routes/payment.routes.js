const express = require('express')
const paymentController = require('../controllers/payment.controller');
const router = express.router();


router.post('/create-order',paymentController.createOrder);

module.exports = router;