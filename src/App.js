import React from "react";
import Car from "./Car/Car.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ford", price: "10000", year: "2014" },
        { name: "Mazda", price: "11000", year: "2017" },
        { name: "BMW", price: "8600", year: "2018" },
        { name: "Audi", price: "15300", year: "2015" },
        { name: "Mercedes", price: "14500", year: "2019" },
        { name: "Lada", price: "150", year: "1990" }
      ],
      showCars: true,
      title: "Epic Cars Shop"
    };
  }

  showCarsHandler = () => {
    this.setState({ showCars: !this.state.showCars });
  };

  changeTitleHandler = event => {
    let title = event.target.value;
    this.setState({ title });
  };

  deleteCarHandler = index => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  };

  render() {
    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            price={car.price}
            year={car.year}
            onDelete={this.deleteCarHandler.bind(this, index)}
          />
        );
      });
    }

    return (
      <div className="header">
        <h1 className="header__title">{this.state.title}</h1>
        <div className="header__input-wrapper">
          <input
            value={this.state.title}
            onChange={this.changeTitleHandler}
            className="header__input"
          ></input>
        </div>
        <button className="header__button" onClick={this.showCarsHandler}>
          Toggle cars
        </button>
        <ol className="cars-list">{cars}</ol>
      </div>
    );
  }
}

export default App;
