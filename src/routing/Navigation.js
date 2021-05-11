import React, { Component } from "react";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";

//Styling
import "../css/index.css";
import "../css/grid.css";
// Routes
import GLS from "./Gls.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
// Components
import PopularCities from "../components/PopularCities";
import Temp from "../components/Temp";

class Navigation extends Component {
  state = {
    city: "",
    unit: "",
  };

  onCitySelected = event => {
    console.log("onCitySelected:", event.target.value);
    this.setState({ city: event.target.value });
  };

  onTempSelected = props => {
    this.setState({ unit: props });
    
  };

  render() {
    return (
      <HashRouter>
        <nav className="sticky">
          <div className="row">
            <ul className="main-nav">
              <li><Temp onChange={this.onTempSelected} /></li>
              <li><PopularCities onChange={this.onCitySelected} /></li>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/login">Sign In</NavLink></li>
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/gls">GLS</NavLink></li>
            </ul>
          </div>
        </nav>
        {/* Switch will only render exact matches and routes not. Routes can't be used with nested routes */}
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home unit={this.state.unit} city={this.state.city} onChange={this.props} />}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/gls" component={GLS} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Navigation;
