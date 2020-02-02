import React from "react";
import withClass from "../hoc/withClass";
import "./Cars.css";
import PropTypes from "prop-types";

class Cars extends React.Component {
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

Cars.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  year: PropTypes.number,
  onDelete: PropTypes.func
};

export default withClass(Cars, "car");
