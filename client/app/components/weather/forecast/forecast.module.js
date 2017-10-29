import angular from 'angular';

import forecastComponent from './forecast.component';

let forecastModule = angular.module('components.weather')
  .component('forecast', forecastComponent)
  .name;

export default forecastModule;
