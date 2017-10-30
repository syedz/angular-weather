let WeatherFactory = function(CONFIG, $http) {
  'ngInject';

  let getFiveDayForecast = (degree, city) => {
    let units = degree == 'F' ? 'imperial' : 'metric';
    let url = `${CONFIG.openWeatherBaseUrl}forecast/daily?q=${city}&units=${units}&appid=${CONFIG.apiKey}`;

    return $http
      .get(url)
      .then(function(res) {
        return res.data;
      });
  };

  return {
    getFiveDayForecast
  };
}

export default WeatherFactory
