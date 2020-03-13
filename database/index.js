const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/turntable', { useNewUrlParser: true, useUnifiedTopology: true });

const placeSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  photos_food: [String],
  photos_building: [String],
});

const Place = mongoose.model('Place', placeSchema);

const get = (query = {}, callback) => {
  Place.find(query, { __v: 0 }, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success[0]);
    }
  });
};

module.exports = {
  Place,
  get,
};
