const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();



router.post('/', productController.createProduct);
router.get('/get-item', productController.getItem);


module.exports = router;