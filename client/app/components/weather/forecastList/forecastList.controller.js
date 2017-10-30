class ForecastListController {
  constructor(WeatherFactory) {
    'ngInject';

    this._WeatherFactory = WeatherFactory;
  }

  $onInit() {
    this.updateCity();
  }

  updateCity() {
    this._WeatherFactory
      .getFiveDayForecast(this.degree, this.city)
      .then(
        (res) => {
          if (res.cod == 200) {
            this.fiveDayForecast = res;
            this.error           = null;

            return this.fiveDayForecast;
          }
        },
        (err) => {
          console.log(err);
          this.error = err.data.message;
          return this.error;
        }
      );
  }
}

export default ForecastListController;
