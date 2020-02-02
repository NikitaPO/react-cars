import React from "react";
import Cars from "./Cars/Cars.js";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter.js";
import { Route, NavLink, Switch } from "react-router-dom";
import ChangeTitle from "./ChangeTitle/ChangeTitle.js";
import CarDetails from "./Cars/CarDetails/CarDetails.js";

export const ClickedContext = React.createContext(false);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ford", price: 10000, year: 2014 },
        { name: "Mazda", price: 11000, year: 2017 },
        { name: "BMW", price: 8600, year: 2018 },
        { name: "Audi", price: 15300, year: 2015 },
        { name: "Mercedes", price: 14500, year: 2019 },
        { name: "Lada", price: 150, year: 1990 }
      ],
      showCars: true,
      clicked: false,
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
          <ErrorBoundary key={index}>
            <Cars
              name={car.name}
              price={car.price}
              year={car.year}
              onDelete={this.deleteCarHandler.bind(this, index)}
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div className="header">
        <h1 className="header__title">{this.state.title}</h1>

        <nav className="navigation">
          <ul>
            <ol className="navigation__item">
              <NavLink
                exact
                className="navigation__link"
                activeClassName="active-link"
                to="/"
              >
                Home
              </NavLink>
            </ol>
            <ol className="navigation__item">
              <NavLink
                className="navigation__link"
                activeClassName="active-link"
                to="/cars"
              >
                Cars
              </NavLink>
            </ol>
            <ol className="navigation__item">
              <NavLink
                className="navigation__link"
                activeClassName="active-link"
                to={{
                  pathname: "/change-title"
                }}
              >
                Change title
              </NavLink>
            </ol>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/change-title"
            render={() => (
              <ChangeTitle
                title={this.state.title}
                changeTitleHandler={this.changeTitleHandler.bind(this)}
              />
            )}
          />

          <Route
            path="/cars"
            render={() => (
              <React.Fragment>
                <button
                  className="header__button"
                  onClick={this.showCarsHandler}
                >
                  Toggle cars
                </button>
                <ol className="cars-list">{cars}</ol>
              </React.Fragment>
            )}
          />

          <Route path="/cars/:name" Component={CarDetails} />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <ClickedContext.Provider value={this.state.clicked}>
                  <Counter />
                </ClickedContext.Provider>
                <button
                  className="def-btn"
                  onClick={() => this.setState({ clicked: true })}
                >
                  Change clicked
                </button>
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
