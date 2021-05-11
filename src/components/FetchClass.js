function handleHttpErrors(result) {
  if (!result.ok) {
    return Promise.reject({ status: result.status, fullError: result.json() });
  }
  return result.json();
}

class FetchClass {

  getWeatherData = async value => {
    const result = await fetch(
      `https://techjahn.dk/WeatherApi/api/weather/5days/${value}`
    );
    return handleHttpErrors(result);
  };

  getPopularCities = async () => {
    const result = await fetch(
      `https://techjahn.dk/WeatherApi/api/weather/popularcities`
    );
    return handleHttpErrors(result);
  };
  
  fetchCitiesForClickedCountry = async countryWoeid => {
    const result = await fetch (
      `https://techjahn.dk/WeatherApi/api/weather/country/${countryWoeid}`
    );
    return handleHttpErrors(result);
  }

  fetchWeatherData = async value => {
    try {
      return await this.getWeatherData(value);
    } catch (e) {
      // e.fullError.then(err => {
      //   alert(err.errorMessage);
      //   console.log(err.errorMessage);
      throw e;
      };
    }

  fetchGlsPartnersForZipCode = async zipcode => {
    const result = await fetch (
       `https://techjahn.dk/WeatherApi/api/weather/gls/${zipcode}`
      //`https://dieky.dk/jwtbackend/api/info/zipcode/${zipcode}`
    );
    return handleHttpErrors(result);
  }
};

export default new FetchClass();
