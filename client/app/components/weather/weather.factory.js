let WeatherFactory = function(CONFIG, $http) {
  'ngInject';

  let getFiveDayForecast = () => {
    let url = `${CONFIG.openWeatherBaseUrl}forecast/daily?q=Toronto,CA&units=metric&appid=${CONFIG.apiKey}`;

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
