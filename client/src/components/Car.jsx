import React from "react";
import ListCar from "./ListCar.jsx";

const Car = (props) => (
  <div>
    <h4> available cars </h4>
    There are {props.cars.length} cars.
    {props.cars.map((car, index) => (
      <div key={index}>
        <ListCar car={car} />
      </div>
    ))}
  </div>
);

export default Car;
