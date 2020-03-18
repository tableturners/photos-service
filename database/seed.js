const faker = require('faker');
const db = require('./index.js');

const seedOne = (index) => {
  const seed = [];

  for (let i = 0; i < 10; i++) {
    seed.push(`https://eric-liu-turntable.s3-us-west-1.amazonaws.com/${index}_${i}`);
  }

  db.Place.create({
    _id: index,
    name: faker.commerce.productName(),
    urls: seed,
  }, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
    }
  });
};

for (let i = 0; i < 100; i++) { // restaurant id
  seedOne(i);
}
