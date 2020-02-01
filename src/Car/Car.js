import React from "react";
import withClass from "../hoc/withClass";
import "./Car.css";

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <h3 className="car__title">{props.name}</h3>
        <p>
          Car price: <strong>{props.price}$</strong>
        </p>
        <p>
          Car year: <strong>{props.year}</strong>
        </p>
        <button className="close" onClick={props.onDelete}></button>
      </React.Fragment>
    );
  }
}

export default withClass(Car, "car");
