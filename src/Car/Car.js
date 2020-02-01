import React from "react";
import withClass from "../hoc/withClass";
import "./Car.css";
import PropTypes from "prop-types";

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

Car.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  year: PropTypes.number,
  onDelete: PropTypes.func
};

export default withClass(Car, "car");
