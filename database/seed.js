const faker = require('faker');
const db = require('./index.js');

const seedOne = (index) => {
  const seedPicsArray = [];

  for (let i = 0; i < 10; i++) {
    seedPicsArray.push({
      url: `https://eric-liu-turntable.s3-us-west-1.amazonaws.com/${index}_${i}`,
      username: faker.internet.userName(),
      date: faker.date.past(5)
    });
  }

  db.Place.create({
    _id: index,
    name: faker.commerce.productName(),
    pics: seedPicsArray,
  }, (err, success) => {
    (err) ? console.log(err) : console.log(success);
  });
};

for (let i = 0; i < 100; i++) { // restaurant id
  seedOne(i);
}
