const faker = require('faker');
const db = require('./index.js');

const seedFood = [];
const seedBuilding = [];

for (let i = 0; i < 5; i++) {
  seedFood.push('https://loremflickr.com/320/240/food');
  seedBuilding.push('https://loremflickr.com/320/240/restaurant');
}

module.exports.seedOne = (index, callback) => {
  db.Place.create({
    id: index,
    name: faker.commerce.productName(),
    photos_food: seedFood,
    photos_building: seedBuilding
  }, (err, success) => {
    (err) ? callback(err, null) : callback(null, success)
  })
}
