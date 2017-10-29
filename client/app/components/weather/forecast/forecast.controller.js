class ForecastController {
  constructor($filter) {
    'ngInject';
  }

  $onChanges(changes) {
    if (changes.weather) {
      this.weather = Object.assign({}, this.weather);
    }

    console.log(this.weather);
  };
}

export default ForecastController;
