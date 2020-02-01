import React from "react";
import "./Car.css";

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { props } = this;

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
}

export default Car;
