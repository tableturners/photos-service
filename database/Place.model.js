const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  pics: [{}] // { url: String, username: String, date: String }
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
  get
};