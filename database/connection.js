const mongoose = require("mongoose");

const connection = "mongodb://mongo:27017/turntable";

const connectDb = () => {
  return mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(e));
};

module.exports = connectDb;
