import express from 'express';
import { createProduct, deleteProducts, getProductById, getProducts, updateProduct, getProductCart, getAllProducts, getProductsPerCategory, searchProducts, getProductInfinite } from '../controllers/ProductController.js';
// import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/products', getProducts);
router.get('/api/products-infinite', getProductInfinite);
router.get('/api/all-products', getAllProducts);
router.get('/api/products-per-category', getProductsPerCategory);
router.get('/api/products/:id', getProductById);
router.get('/api/products-cart/:id', getProductCart);
router.get('/api/search-products', searchProducts);
router.post('/api/products', createProduct);
router.patch('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProducts);

export default router;