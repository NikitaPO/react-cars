import React from "react";
import "./Car.css";

function Car(props) {
  return (
    <li className="car">
      <h3 className="car__title">{props.name}</h3>
      <p>
        Car price: <strong>{props.price}$</strong>
      </p>
      <p>
        Car year: <strong>{props.year}</strong>
      </p>
      <button className="close" onClick={props.onDelete}></button>
    </li>
  );
}

export default Car;
