let WeatherFactory = function(CONFIG, $http) {
  'ngInject';

  let getFiveDayForecast = (degree) => {
    let units = degree == 'F' ? 'imperial' : 'metric';
    let url = `${CONFIG.openWeatherBaseUrl}forecast/daily?q=Toronto,CA&units=${units}&appid=${CONFIG.apiKey}`;

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
