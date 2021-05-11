import React, { Component } from "react";
//Components
import FetchClass from "./FetchClass";


export default class Cities extends Component {
constructor(props){
  super(props);

  this.state = {
    value: "",
    cities: [
      {
        cityname: "Something Went Wrong"
      }
    ]
  };
}


  componentDidMount = async () => {
    const popularCities = await FetchClass.getPopularCities();
    this.setState({ cities: [...popularCities] });
  };

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log(event.target.value, '  Hallo from PopularCities Component');

    this.props.onChange(event);
  };


  render() {
    let options = this.state.cities.map(city =>(
    <option 
    value={city.cityname} 
    key={city.cityname}>
    {city.cityname}
    </option>));

    return (
    <div>
      <div>
        <select onChange={this.onChangeHandler}>
          <option defaultValue>Cities</option>
          {options}
        </select>
      </div>
    </div>
    );
  }
}










