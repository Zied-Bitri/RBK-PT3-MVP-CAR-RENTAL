const cars = require("./data")
const { addCar } = require("./server/database-mongo/index");

addCar(cars)
.then(() => console.log("cars'list added successfully..."))
.catch((err) => console.log(err));