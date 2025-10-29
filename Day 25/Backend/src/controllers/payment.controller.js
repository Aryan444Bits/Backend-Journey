const productModel = require('../models/product.model');
const RazorPay = require('razorpay');
const paymentModel = require('../models/payment.model');

const razorpay = new RazorPay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function createOrder(req, res) {
    
    const product =  await productModel.findOne();

    const options = {
        amount: product.price.amount,
        currency:product.price.currency,
    }

    try {
        const order = await razorpay.orders.create(options);
        res.status(201).json(order);

        const newPayment = await paymentModel.create({
            orderId: order.id,
            price:{
                amount: order.amount,
                currency: order.currency,   
            },
            currency: order.currency,
            status: 'PENDING',
        });

    } catch (error) {
        res.status(500).send('Error creating order');
    }
}


module.exports = {
    createOrder,
};