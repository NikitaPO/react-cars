import React from "react";
import { withRouter } from "react-router-dom";

class CarDetails extends React.Component {
  goToShop = () => {
    this.props.history.push({
      pathname: "/cars"
    });
  };

  render() {
    return (
      <div>
        <h2 className="car-information__title">123</h2>
        <div className="car-information__block">
          <h3>Detail information:</h3>
          <ul className="car-information__list">
            <ol className="car-information__item">
              Car price <strong>{this.props.price}</strong>
            </ol>
            <ol className="car-information__item">
              Car year <strong>{this.props.year}</strong>
            </ol>
          </ul>
        </div>
        <button className="def-btn" onClick={this.goToShop}>
          Back to shop
        </button>
      </div>
    );
  }
}

export default withRouter(CarDetails);
