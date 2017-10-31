class ForecastListController {
  constructor($state, WeatherFactory) {
    'ngInject';

    this._$state = $state;
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

            this._$state.go(
              'forecast',
              {
                degree: this.degree,
                city: this.city
              }, {
                notify: false,
              }
            );

            return this.fiveDayForecast;
          }
        },
        (err) => {
          console.log(err);
          this.error           = err.data.message;
          this.fiveDayForecast = null;

          return this.error;
        }
      );
  }
}

export default ForecastListController;
