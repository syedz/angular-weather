let WeatherFactory = function(RESOURCE_CONFIG, $http) {
  'ngInject';

  let getFiveDayForecast = () => {
    let url = `${RESOURCE_CONFIG.openWeatherBaseUrl}forecast/daily?q=Toronto,CA&units=metric&appid=${RESOURCE_CONFIG.apiKey}`;

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
