import React, { Component } from "react";
import EuropeMap from "../components/EuropeMap";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from "../components/Footer";
import Search from "../components/SearchByCity";
import FetchClass from "../components/FetchClass";
import WeatherBoxSimple from '../components/WeatherBoxSimple';
import WeatherBoxDetailed from '../components/WeatherBoxDetailed';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherBoxId: "",
      weatherBox: false,
      city: this.props.city,
      cityCountry: [],
      showDetailedWeatherBox: false,
      idOfDetailedWeatherBox: 0,
      weather: [
        {
          id: this.props.id,
          applicable_date: "",
          min_temp: "",
          max_temp: "",
          the_temp: "",
          wind_speed: "",
          weather_state_name: "",
          weather_state_abbr: "",
          wind_direction_compass: ""
        }
      ]
    };
  }

  componentDidMount = async () => {
    if (this.state.city !== "") {
      const weatherObject = await FetchClass.fetchWeatherData(this.state.city);
      this.setState({ weather: weatherObject, weatherBox: true });
    }
  };

  changeHandlerCitySearch = event => {
    this.setState({ city: event.target.value });
  };

  // submit button to get weather data for 5 days
  onSubmitWeather = async event => {
    event.preventDefault();
    let value = this.state.city;
    try {
      const weatherObject = await FetchClass.fetchWeatherData(value);
      this.setState({ weather: weatherObject, weatherBox: true });
    } catch (e) {
      e.fullError.then(err => {
        alert(err.errorMessage);
      })
    }
  };
  weatherBoxClickHandler = (id) =>{
    this.setState({showDetailedWeatherBox: true, idOfDetailedWeatherBox: id});
  }

  showWeatherCarousel = () => {
    if (this.state.weatherBox === true) {
      return WeatherBoxSimple.showWeatherForecast(this.state.weather, this.props.unit, this.weatherBoxClickHandler);
    } else {
      return "";
    }
  };

  updateCityCountry = value => {
    this.setState({ cityCountry: value });
  };

  changeHandlerCityListing = async (event, city) => {
    const weatherObject = await FetchClass.fetchWeatherData(city);
    this.setState({ city: city, weather: weatherObject, weatherBox: true });
  };

  showCitiesFromCityCountry = () => {
    if (this.state.cityCountry !== []) {
      return this.state.cityCountry
        .map(city => (
          <ul key={city.title}>
            <button
              className="btnCity"
              onClick={event =>
                this.changeHandlerCityListing(event, city.title)
              }>
              <li>
                <a>{city.title}</a>
              </li>
            </button>
          </ul>
        ))
        .filter((res, index) => index < 5);
    }
  };

  updateWeatherBox = isChoice => {
    this.setState({ weatherBox: isChoice });
  };

  weatherId = (id) => {
console.log(id, 'from weather id');

  }


  
  render() {
    let detailedWeatherBox = <h2>GET YOUR WEATHER FORECAST FOR EUROPE TODAY!</h2>;
    if (this.state.showDetailedWeatherBox === true)
    {
      detailedWeatherBox = WeatherBoxDetailed.showWeatherDetailed(this.state.weather, this.state.idOfDetailedWeatherBox, this.state.city);
      console.log(detailedWeatherBox);
    }
    return (
      <div>
        <section className="section-map">
          <div className="row home-row">
            {detailedWeatherBox}            
            <div className="col span-2-of-3">
              <EuropeMap
                cityCountry={this.state.cityCountry}
                updateCity={this.updateCityCountry}
                isWeatherBox={this.state.weatherBox}
                updateWeatherBox={this.updateWeatherBox}
              />
            </div>

            <div className="col span-1-of-3 showCityBox">
              <div>{this.showCitiesFromCityCountry()}</div>
            </div>
          </div>
        </section>

        <section className="section-showcase">
          <div className="showcase">{this.showWeatherCarousel()}</div>
        </section>

        <section className="section-search">
          <div className="row search-row">
            <ul className="search">
              <li>
                <Search
                  onChange={this.changeHandlerCitySearch}
                  onSubmit={this.onSubmitWeather}
                />
              </li>
            </ul>
          </div>
        </section>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
