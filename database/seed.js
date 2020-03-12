const faker = require('faker');
const db = require('./index.js');

const seedFood = [];
const seedBuilding = [];

const seedOne = (index, callback) => {
  db.Place.create({
    _id: index,
    name: faker.commerce.productName(),
    photos_food: seedFood,
    photos_building: seedBuilding,
  }, (err, success) => {
    (err) ? callback(err, null) : callback(null, success)
  });
};

for (let i = 0; i < 5; i++) {
  seedFood.push('https://loremflickr.com/320/240/food,dish?random=' + i);
  seedBuilding.push('https://loremflickr.com/320/240/restaurant,building?random=' + i);
}

for (let i = 1; i < 11; i++) {
  seedOne(i, (err, result) => {
    (err) ? console.log(err) : console.log(result)
  });
}
