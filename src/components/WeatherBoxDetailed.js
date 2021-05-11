import React, { Component } from "react";

class WeatherBoxDetailed {
  showWeatherDetailed = (weather, id, city) => {
    console.log(city);
    
    const newWeatherArray = weather.filter(res => res.id === id);
    return newWeatherArray.map(res => (
      <div key={res.id} className="temp-div" style={detailedBoxStyle}>
        <table className="colums table-temp" cellSpacing="0" cellPadding="0" >
          <tbody>
            <tr>
              <td>{`City:`}</td>
              <td>{`${city} `}</td>
              <td />
            </tr>
            <tr>
              <td>{`Date:`}</td>
              <td>{`${res.applicable_date} `}</td>
              <td />
            </tr>
            <tr>
              <td>{`Temperature:`}</td>
              <td>{`${Math.round(res.the_temp)} `}&#8451;</td>
              <td />
            </tr>
            <tr>
              <td>{`Max:`}</td>
              <td>{`${Math.round(res.max_temp)} `}&#8451;</td>
              <td />
            </tr>
            <tr>
              <td>{`Min:`}</td>
              <td>{`${Math.round(res.min_temp)} `}&#8451;</td>
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
      </div>
    ));
  };
}

const detailedBoxStyle = {
  backgroundColor: "#fff",
  width: "550 px",
  height: '550 px',
  display: 'flex',
  justifyContent: 'center',
  
};

export default new WeatherBoxDetailed();
