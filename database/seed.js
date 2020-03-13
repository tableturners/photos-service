const faker = require('faker');
const db = require('./index.js');


const seedOne = (index) => {
  let seedFood = [];
  let seedBuilding = [];

  for (let i = 1; i < 11; i++) {
    seedFood.push(`https://eric-liu-turntable.s3-us-west-1.amazonaws.com/${index}_food_${i}`);
    seedBuilding.push(`https://eric-liu-turntable.s3-us-west-1.amazonaws.com/${index}_building_${i}`);
  }

  db.Place.create({
    _id: index,
    name: faker.commerce.productName(),
    photos_food: seedFood, // stores AWS S3 url
    photos_building: seedBuilding,
  }, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
    }
  });
};

for (let i = 1; i < 101; i++) { // restaurant id
  seedOne(i);
}
