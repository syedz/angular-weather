class ForecastDayController {
  constructor($filter) {
    'ngInject';
  }

  $onChanges(changes) {
    if (changes.day) {
      this.day = Object.assign({}, this.day);
    }

    console.log(this.day);
  };
}

export default ForecastDayController;
