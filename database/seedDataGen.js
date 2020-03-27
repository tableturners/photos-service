const faker = require('faker');
const fs = require('fs');
const path = require('path');

const data = [];

const seedOne = (index) => {
  const seedPicsArray = [];

  for (let i = 0; i < 10; i++) {
    seedPicsArray.push({
      url: `https://eric-liu-turntable.s3-us-west-1.amazonaws.com/${index}_${i}`,
      username: faker.internet.userName(),
      date: faker.date.past(5)
    });
  }

  data.push({
    '_id': index,
    'name': faker.commerce.productName(),
    'pics': seedPicsArray,
  });
};

for (let i = 0; i < 100; i++) { // restaurant id
  seedOne(i);
}

fs.writeFile(path.join(__dirname, 'seedData.json'), JSON.stringify(data), (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(success);
  }
});
