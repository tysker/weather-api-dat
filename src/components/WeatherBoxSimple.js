import React, { Component } from "react";

class WeatherBoxSimple extends Component {
  converter = temp => {
    return (temp = temp * 1.8 + 32);
  };

  toogletemp = (unit, result) => {
    return unit === true
      ? `${Math.round(this.converter(result))} \xB0F`
      : `${Math.round(result)} \xB0C`;
  };


 

  //shows weather for 5 days
  showWeatherForecast = (weather, unit, clickHandler) => {
    return weather.map(res => (
      <div key={res.id} className="temp-div" >
        <button onClick={(event) => clickHandler(res.id)}>
          <table className="colums table-temp" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <td>{`Date:`}</td>
                <td>{`${res.applicable_date} `}</td>
                <td />
              </tr>
              <tr>
                <td>{`Temperature:`}</td>
                <td>{this.toogletemp(unit, res.the_temp)};</td>
                <td />
              </tr>
              <tr>
                <td>{`Max:`}</td>
                <td>{this.toogletemp(unit, res.max_temp)}</td>
                <td />
              </tr>
              <tr>
                <td>{`Min:`}</td>
                <td>{this.toogletemp(unit, res.min_temp)}</td>
                <td />
              </tr>
              <tr>
                <td>{`Wind Speed:`}</td>
                <td>{`${Math.round(res.wind_speed)} `}&#13223;</td>
                <td />
              </tr>
              <tr>
                <td>{`Weather:`}</td>
                <td>{`${res.weather_state_name}`}</td>
                <td>
                  <img
                    alt="Weather Icon"
                    src={`https://www.metaweather.com/static/img/weather/ico/${
                      res.weather_state_abbr
                    }.ico`}
                  />
                </td>
              </tr>
              <tr>
                <td>{`Wind Direction:`}</td>
                <td>{`${res.wind_direction_compass} `}</td>
                <td />
              </tr>
              <tr />
            </tbody>
          </table>
        </button>
      </div>
    ));
  };
}


export default new WeatherBoxSimple();
