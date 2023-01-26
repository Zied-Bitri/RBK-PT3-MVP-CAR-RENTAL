const mongoose = require("mongoose");
const Car = require('./Car.model');

const mongoUri = "mongodb://127.0.0.1/mvp";

mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db connected");
  })
  .catch(err => console.log(err));

const db = mongoose.connection;

const addCar = (car) => {
  return Car.create(car);
};





module.exports = { db, addCar};
