import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisineType: [String],
  location: String,
  menu: [{
    name: String,
    price: Number,
    category: String,
    description: String
  }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
