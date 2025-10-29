const productmodel = require('../models/product.model');



async function createProduct(req, res) {


    const { image, title, description, price: { amount, currency } } = req.body;

    try {
        const product = await productmodel.create({
            image,
            title,
            description,
            price: {
                amount,
                currency
            },
        });
        return res.status(201).json({
            message: 'Product created successfully',
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong while creating the product.',
            error: error.message
        });
    }
}
async function getItem(req, res) {

    try{
        const product = await productmodel.findOne();
        return res.status(200).json({
            message: 'Products retrieved successfully',
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong while retrieving products.',
            error: error.message
        });
    }
}

module.exports = {
    createProduct,
    getItem
};