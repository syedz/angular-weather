import angular from 'angular';

import forecastDayComponent from './forecastDay.component';

let forecastDayModule = angular.module('components.weather')
  .component('forecastDay', forecastDayComponent)
  .name;

export default forecastDayModule;
