const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/turntable', { useNewUrlParser: true, useUnifiedTopology: true });

const placeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  photos_food: [String],
  photos_building: [String]
});

const Place = mongoose.model('Place', placeSchema);

const get = (callback) => {
  Place.find({}, callback);
};

module.exports = {
  Place,
  get
}
