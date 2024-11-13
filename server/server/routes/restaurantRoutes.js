import express from 'express';
import { createRestaurant, getRestaurants } from '../controllers/restaurantController.js';
import { authMiddleware, authorizeRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, authorizeRole('seller'), createRestaurant);
router.get('/', authMiddleware, getRestaurants);

export default router;
