import Restaurant from '../models/Restaurant.js';

export const createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant({ ...req.body, owner: req.user._id });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create restaurant' });
  }
};

export const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};
