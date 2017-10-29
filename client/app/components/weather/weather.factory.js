let WeatherFactory = function($http) {
  'ngInject';

  this.apiKey = '8caa3a62ba1f3b52d931888f38d1bc75';
  this.baseUrl = 'https://api.openweathermap.org/data/2.5/';

  let getFiveDayForecast = () => {
    var url = this.baseUrl + 'forecast?q=Toronto,CA&units=metric&appid=' + this.apiKey;

    return $http
      .get(url)
      .then(function(res) {
        // console.log(res);
        return res.data;
      });
  };

  return {
    getFiveDayForecast
  };
}

export default WeatherFactory