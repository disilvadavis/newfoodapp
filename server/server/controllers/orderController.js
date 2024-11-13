import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { items, totalAmount, restaurant } = req.body;
  const order = new Order({
    user: req.user._id,
    items,
    totalAmount,
    restaurant,
    status: 'pending'
  });
  await order.save();
  res.status(201).json(order);
};
